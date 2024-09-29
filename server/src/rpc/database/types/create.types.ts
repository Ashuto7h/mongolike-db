import { IsString } from 'class-validator';

export class CreateDatabaseRequest {
  @IsString()
  name: string;
}

export class CreateDatabaseResponse {
  @IsString()
  name: string;
}
