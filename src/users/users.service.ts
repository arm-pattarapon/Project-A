import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/shcemas/User.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UserPermission } from 'src/shcemas/UserPermission.schema';


@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(UserPermission.name) private permssionModel: Model<UserPermission>
    ) {}

    getsUser(){
        return this.userModel.find().select('-password');
    }

    async createUser({permissions,...createUserDto}: CreateUserDto){
        try {
            console.log(createUserDto);
            
            const isDuplicate = await this.userModel.findOne({email:createUserDto.email},'email').exec();
          
            if (!isDuplicate) {
                const newUser = new this.userModel(createUserDto)
                if (permissions.length <= 0) {
                   const defaultPermission = await this.permssionModel.findOne({permissionName:'default'}).select('_id').exec();
                newUser.save()
                   .then(user =>{ 
                    user.updateOne({
                        $push:{
                            permissions:[defaultPermission._id]
                        }
                    })
                }).catch(err => console.log(err));

                }else{

                }

            }else{
                console.log(`${isDuplicate.email} is aready exist.`);
            }

        } catch (error) {
            console.log(error);
        }

        
    }
}
