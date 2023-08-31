import { BadRequestException, Body, Controller, Delete, Get, Header, HttpStatus, Param, ParseBoolPipe, ParseIntPipe, Post, Query, Redirect, Req, Res, UseFilters, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interface/user';
import { UserDto, UserParamsDto } from './dto/user.dto';
import { Request, Response } from 'express';
import { HttpExceptionFilter } from './filter';
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
    async getUser(@Param() param: UserParamsDto): Promise<User> {
        try {
            return this.userService.getUser(param.email);
        }
        catch (err) {
            throw new BadRequestException("Test");
        }

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
