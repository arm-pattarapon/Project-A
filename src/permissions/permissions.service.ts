import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserPermission } from 'src/shcemas/UserPermission.schema';

@Injectable()
export class PermissionsService implements OnModuleInit {
    constructor(@InjectModel(UserPermission.name) private permissionModel: Model<UserPermission>){}

    async onModuleInit() {
        await this.createDefaultPemission();
    }

    async createDefaultPemission(){
        const exstingPermission = await this.permissionModel.findOne({permissionName:'default'}).exec();

        if (!exstingPermission) {
            await this.permissionModel.create({permissionName:'default'});
        }else{
            console.log("⚡ Default permission already exists.");
        }
    }
}
