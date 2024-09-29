import { Module } from '@nestjs/common';
// import { ClientsModule, Transport } from '@nestjs/microservices';
import { RpcModule } from './rpc/rpc.module';
// import { grpcClientOptions } from './grpc.options';

@Module({
  imports: [
    RpcModule,
    // ClientsModule.register([
    //   {
    //     name: 'RIFT_PACKAGE',
    //     transport: Transport.GRPC,
    //     options: grpcClientOptions.options,
    //   },
    // ]),
  ],
})
export class AppModule {}
