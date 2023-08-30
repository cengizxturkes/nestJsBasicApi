import { Body, Controller, Delete, Get, Header, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Redirect, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, UserParamsDto } from './dto/user.dto';
import { Request, Response } from 'express';
@Controller("users")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    getUsers(
        @Param('id', ParseIntPipe) id: number,
        @Query('sort',) sort: boolean,
        @Body() data: UserDto,
        @Req() req: Request,

    ): User[] {
        return this.userService.getUsers();
    }

    @Get("/:email")
    @Redirect("")
    @Header("Cache-Control", "none")
    getUser(@Param() param: UserParamsDto, @Req() req: Request, @Res() res: Response) {
        const data = this.userService.getUser(param.email);
        res.status(HttpStatus.CREATED).send();
    }
    @Post()
    @UsePipes(new ValidationPipe())
    async postUser(@Body() user: UserDto): Promise<User> {
        return this.userService.addUser(user);
    }
    @Delete("/:email")
    deleteUser(@Param() params: UserParamsDto): User[] {
        return this.userService.deleteUser(params.email);
    }
}
