import { Injectable, NestMiddleware } from "@nestjs/common";

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log("request");
        //condition check
        next();
    }

}