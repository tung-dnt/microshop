import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common'

@Catch()
export class HttpErrorFilter implements ExceptionFilter {
  private readonly logger: Logger

  constructor() {
    this.logger = new Logger()
  }

  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const request = ctx.getRequest()
    const response = ctx.getResponse()

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR
    const message = exception.message || 'Internal server error'

    const devErrorResponse = {
      statusCode,
      timestamp: new Date().toISOString(),
      path: request.url,
      method: request.method,
      errorName: exception?.name,
      message,
    }

    // const prodErrorResponse = {
    //   statusCode,
    //   message,
    // };
    this.logger.log(
      `<${request.method}> ${request.url}`,
      JSON.stringify(devErrorResponse),
    )
    response.status(statusCode).json(devErrorResponse)
  }
}
