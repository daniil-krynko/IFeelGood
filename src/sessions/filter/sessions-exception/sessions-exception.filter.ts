import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class SessionsExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {}
}
