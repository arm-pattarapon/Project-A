import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shcemas/User.schema';
import { CreateUserDto } from './dto/CreateUser.dto';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ) {}

    getsUser(){
        return this.userModel.find().select('-password');
    }

    async createUser(createUserDto: CreateUserDto){
        try {
            const isDuplicate = await this.userModel.findOne({email:createUserDto.email},'email').exec();
            console.log("dup",isDuplicate);
            if (!isDuplicate) {
                const newUser = new this.userModel(createUserDto)
                newUser.save()
                    .then(user => console.log(user))
                    .catch(err => console.log(err));
            }
        } catch (error) {
            console.log(error);
        }

        
    }
}
