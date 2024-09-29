import { Injectable } from '@nestjs/common';
import { mkdirSync } from 'fs';
import { homedir } from 'os';
import * as path from 'path';
import { writeBuf } from '../../common';
import { CreateDatabaseRequest, CreateDatabaseResponse } from './types/create.types';

@Injectable()
export class DatabaseService {
  create(data: CreateDatabaseRequest): CreateDatabaseResponse {
    const dbPath = path.join(homedir(), '.riftdb', data.name);
    mkdirSync(dbPath, { recursive: true });
    const metadata = {
      name: data.name,
      createdAt: new Date(),
    };
    writeBuf(
      path.join(__dirname, '../', '../', 'proto', 'database.proto'),
      'DatabaseMetadata',
      metadata,
      path.join(dbPath, '.metadata.bin'),
    );
    return {
      name: data.name,
    };
  }
}
