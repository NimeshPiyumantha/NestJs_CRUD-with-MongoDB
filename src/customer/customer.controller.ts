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
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './interfaces/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  async create(
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.createCustomer(createCustomerDto);
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAllCustomer();
  }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Customer> {
    return this.customerService.findOneCustomer(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.updateCustomer(+id, updateCustomerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id): Promise<Customer> {
    return this.customerService.removeCustomer(+id);
  }

  @Put(':id')
  async updatePut(
    @Param('id') id,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): Promise<Customer> {
    return this.customerService.updateCustomer(+id, updateCustomerDto);
  }
}
