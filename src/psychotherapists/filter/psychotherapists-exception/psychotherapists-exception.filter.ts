import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class PsychotherapistsExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
