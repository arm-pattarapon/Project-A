import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Get()
    getsUsers(){
        return this.usersService.getsUser();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    creatUser(@Body() createUserDto: CreateUserDto){
        // console.log(createUserDto);
        try {
            this.usersService.createUser(createUserDto)
        } catch (error) {
            return 'error creating user'
        }
        
    }
}
