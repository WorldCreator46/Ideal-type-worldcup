import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorldcupController } from './worldcup.controller';
import { WorldCupRepository } from './worldcup.repository';
import { WorldcupService } from './worldcup.service';

@Module({
  imports: [TypeOrmModule.forFeature([WorldCupRepository])],
  controllers: [WorldcupController],
  providers: [WorldcupService],
})
export class WorldcupModule {}
