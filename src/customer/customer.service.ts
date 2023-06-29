import { Injectable } from '@nestjs/common';
import { Customer } from './interfaces/customer.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  async saveCustomer(createCustomerDto: Customer) {
    const newCustomer = new this.customerModel(createCustomerDto);
    return await newCustomer.save();
  }

  async findAllCustomer(): Promise<Customer[]> {
    // return `This action returns all customer`;
    return await this.customerModel.find();
  }

  async findOneCustomer(id: string): Promise<Customer> {
    // return `This action returns a #${id} customer`;
    return await this.customerModel.findOne({ id: id });
  }

  async updateCustomer(id: number, updateCustomerDto: Customer) {
    return await this.customerModel.findByIdAndUpdate(id, updateCustomerDto, {
      new: true,
    });
  }

  async removeCustomer(id: number) {
    return await this.customerModel.findByIdAndRemove(id);
  }
}
