import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CreateDatabaseRequest, CreateDatabaseResponse } from './types/create.types';
import { DatabaseService } from './database.service';

@Controller()
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}

  @GrpcMethod('DatabaseService')
  create(data: CreateDatabaseRequest): CreateDatabaseResponse {
    return this.databaseService.create(data);
  }
}
