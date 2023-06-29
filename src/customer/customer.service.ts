import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './interfaces/customer.interface';

@Injectable()
export class CustomerService {
  private readonly customers: Customer[] = [
    {
      id: 'C00-001',
      name: 'Nimesh',
      email: 'nimesh1@gmail.com',
      contact: '0777123456',
    },
    {
      id: 'C00-002',
      name: 'Nimesha',
      email: 'nimesh21@gmail.com',
      contact: '0777124456',
    },
    {
      id: 'C00-003',
      name: 'Nimeshd',
      email: 'nimesh14@gmail.com',
      contact: '0777123456',
    },
  ];

  create(createCustomerDto: CreateCustomerDto) {
    return 'This action adds a new customer';
  }

  findAll(): Customer[] {
    // return `This action returns all customer`;
    return this.customers;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
