import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { pgProvider } from './pg.provider';

@Module({
  imports: [ConfigModule], // Required to use ConfigService
  providers: [pgProvider],
  exports: [pgProvider],
})
export class DatabaseModule {}