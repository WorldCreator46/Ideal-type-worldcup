import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormconfig from './ormconfig';
import { UserModule } from './user/user.module';
import { WorldcupModule } from './worldcup/worldcup.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(ormconfig),
    UserModule,
    WorldcupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
