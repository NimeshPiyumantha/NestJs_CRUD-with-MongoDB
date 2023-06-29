import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { Customer } from './interfaces/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customersService: CustomerService) {}

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.saveCustomer(createCustomerDto);
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customersService.findAllCustomer();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Customer> {
    return this.customersService.findOneCustomer(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id,
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.updateCustomer(id, createCustomerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id): Promise<Customer> {
    return this.customersService.removeCustomer(id);
  }

  @Put(':id')
  async updatePut(
    @Param('id') id,
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.updateCustomer(id, createCustomerDto);
  }
}
