import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './interfaces/customer.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async saveCustomer(createCustomerDto: CreateCustomerDto) {
    const newCustomer = new this.customerModel(createCustomerDto);
    return await newCustomer.save();
  }

  async findAllCustomer(): Promise<Customer[]> {
    // return `This action returns all customer`;
    return await this.customerModel.find();
  }

  async findOneCustomer(id: string): Promise<Customer> {
    // return `This action returns a #${id} customer`;
    return await this.customerModel.findOne({ _id: id });
  }

  async updateCustomer(id: number, updateCustomerDto: UpdateCustomerDto) {
    return await this.customerModel.findByIdAndUpdate(id, updateCustomerDto, {
      new: true,
    });
  }

  async removeCustomer(id: number) {
    return await this.customerModel.findByIdAndRemove(id);
  }
}
