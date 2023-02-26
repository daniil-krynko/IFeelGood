import { Injectable, BadRequestException, ForbiddenException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from '@nestjs/config';
import * as argon2 from "argon2";
import { AuthDto } from './dto/auth.dto';
import { CreatePatientDto } from "src/patients/dto/create-patient.dto";
import { PatientsService } from "src/patients/patients.service";

@Injectable()
export class AuthService {
  constructor(
    private patientsService: PatientsService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) { }

  async signUp(createPatientDto: CreatePatientDto): Promise<any> {
    // Check if patient exists
    const patientExists = await this.patientsService.getPatientByPhone(
      createPatientDto.phone,
    );
    if (patientExists) {
      throw new BadRequestException('Patient already exists');
    }

    // Hash password
    const hash = await this.hashData(createPatientDto.password);
    const newPatient = await this.patientsService.createPatient({
      ...createPatientDto,
      password: hash,
    });
    console.log(`${newPatient.password}: ${newPatient.password}`);
    const tokens = await this.getTokens(newPatient.id, newPatient.phone);
    await this.updateRefreshToken(newPatient.id, tokens.refreshToken);
    return tokens;
  }

  async signIn(authDto: AuthDto) {
    // Check if patient exists
    const patient = await this.patientsService.getPatientByPhone(authDto.phone);
    if (!patient) throw new BadRequestException('Patient does not exist');
    const passwordMatches = await argon2.verify(patient.password, authDto.password);
    if (!passwordMatches)
      throw new BadRequestException('Password is incorrect');
    const tokens = await this.getTokens(patient.id, patient.phone);
    await this.updateRefreshToken(patient.id, tokens.refreshToken);
    return tokens;
  }

  async logout(id: string) {
    this.patientsService.updatePatient(id, { refreshToken: null, editedAt: new Date() });
  }

  async refreshTokens(id: string, refreshToken: string) {
    const patient = await this.patientsService.getPatientById(id);
    if (!patient || !patient.refreshToken)
      throw new ForbiddenException('Access Denied');
    const refreshTokenMatches = await argon2.verify(
      patient.refreshToken,
      refreshToken,
    );
    if (!refreshTokenMatches) throw new ForbiddenException('Access Denied');
    const tokens = await this.getTokens(patient.id, patient.phone);
    await this.updateRefreshToken(patient.id, tokens.refreshToken);
    return tokens;
  }

  hashData(data: string) {
    return argon2.hash(data);
  }

  async updateRefreshToken(id: string, refreshToken: string) {
    const hashedRefreshToken = await this.hashData(refreshToken);
    await this.patientsService.updatePatient(id, {
      refreshToken: hashedRefreshToken,
      editedAt: new Date()
    });
  }

  async getTokens(id: string, phone: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: id,
          phone,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: id,
          phone,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

}
