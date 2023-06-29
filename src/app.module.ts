import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';
import { MongooseModule } from '@nestjs/mongoose';

import { config } from 'dotenv';
// dotenv configuration
config();

@Module({
  imports: [CustomerModule, MongooseModule.forRoot(process.env.MongoDB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
