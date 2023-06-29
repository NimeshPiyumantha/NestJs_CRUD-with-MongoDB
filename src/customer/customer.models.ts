import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';
// dotenv configuration
config();
@Module({
  imports: [MongooseModule.forRoot(process.env.MongoDB_URI)],
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule {}
