import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class PatientsExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
