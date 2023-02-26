import { Controller, Param, Body, Get, Post, Put, Delete } from '@nestjs/common';
import { PsychotherapistsService } from "./psychotherapists.service";
import { CreatePsychotherapistDto } from "./dto/create-psychotherapist.dto";
import { UpdatePsychotherapistDto } from "./dto/update-psychotherapist.dto";
import { Psychotherapist } from "./schemas/psychotherapist.schema";

@Controller('psychotherapists')
export class PsychotherapistsController {
    constructor(private psychotherapistsService: PsychotherapistsService) {}
    @Get()
    async getPsychotherapists(): Promise<Psychotherapist[]> {
        return this.psychotherapistsService.getAllPsychotherapists();
    }

    @Get(':_id')
    async getPsychotherapistById(@Param('_id') id: string) {
        return this.psychotherapistsService.getPsychotherapistById(id);
    }

    @Post()
    async createPsychotherapist(@Body() createPsychotherapistDto: CreatePsychotherapistDto) {
        await this.psychotherapistsService.newPsychotherapist(createPsychotherapistDto);
    }

    @Put(':_id')
    async updatePsychotherapist(@Param('_id') id: string, @Body() updatePsychotherapistDto: UpdatePsychotherapistDto) {
        return await this.psychotherapistsService.updatePsychotherapist(id, updatePsychotherapistDto);
    }

    @Delete(':_id')
    async deletePsychotherapist(@Param('_id') id: string) {
        return this.psychotherapistsService.removePsychotherapist(id);
    }
}