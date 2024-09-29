import { Server } from '@grpc/grpc-js';
import { PackageDefinition } from '@grpc/proto-loader';
import { ReflectionService } from '@grpc/reflection';
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: ['database'], // ['hero', 'hero2']
    protoPath: [join(__dirname, 'proto', 'database.proto')], // ['./hero/hero.proto', './hero/hero2.proto']
    onLoadPackageDefinition: (pkg: PackageDefinition, server: Server) => {
      new ReflectionService(pkg).addToServer(server);
    },
    url: 'localhost:1111',
  },
} as const satisfies ClientOptions;
