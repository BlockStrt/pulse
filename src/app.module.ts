import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ExpressController } from './express.controller';
import { AppService } from './app.service';


@Module({
  imports: [
   ConfigModule.forRoot() 
  ],
  controllers: [AppController, ExpressController],
  providers: [AppService],
})
export class AppModule {}
