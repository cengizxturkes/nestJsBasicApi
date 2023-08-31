import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        const status = exception.getStatus();
        response.status(status).json({
            statuscode: status,
            timestamp: new Date().toISOString(),
            //anything youcan add in add rresponse
            path: request.url,
        });


    }
}