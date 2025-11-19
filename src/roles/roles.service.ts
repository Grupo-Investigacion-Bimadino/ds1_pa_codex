import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'; 
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Roles, RolesDocument } from './schemas/roles.schema'; 


@Injectable()
export class RolesService {

  constructor(@InjectModel(Roles.name) private roleModel: Model<RolesDocument>) {}

async create(createRoleDto: CreateRoleDto): Promise<Roles> {
    const createdRole = new this.roleModel(createRoleDto);
    const savedRole = await createdRole.save();
    return savedRole;
  }

  async findAll(): Promise<Roles[]> {
    return this.roleModel.find().exec();
  }

  async findOne(id: string): Promise<Roles | null> {
    return this.roleModel.findById(id).exec();
  }

  async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Roles | null> {
    return this.roleModel.findByIdAndUpdate(id, updateRoleDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any | null> {
    return this.roleModel.findByIdAndDelete(id).exec();
  }  
  
}
