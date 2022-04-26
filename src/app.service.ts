import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserSchemaDocument } from './users.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name)
    private readonly UserEntity: Model<UserSchemaDocument>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  getUser(): any {
    return this.UserEntity.find({}).limit(1);
  }
}
