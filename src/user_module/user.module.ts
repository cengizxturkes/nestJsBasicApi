import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerMiddleWare } from './middleware';


@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleWare).exclude(
            { path: "users", method: RequestMethod.GET },
            { path: "cats", method: RequestMethod.POST }

        ).forRoutes(UserController);
    }
}
