import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserPermission, UserPermissionSchema } from 'src/shcemas/UserPermission.schema';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: UserPermission.name,
        schema: UserPermissionSchema
      }
    ])
  ],
  providers: [PermissionsService],
  controllers: [PermissionsController]
})
export class PermissionsModule {}
