import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User,UserSchema } from 'src/shcemas/User.schema';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserPermission, UserPermissionSchema } from 'src/shcemas/UserPermission.schema';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: User.name,
                schema: UserSchema
            },{
                name: UserPermission.name,
                schema: UserPermissionSchema
            }
        ])
    ],
    providers: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
