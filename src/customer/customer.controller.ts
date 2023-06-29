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
  create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer> {
    return this.customersService.saveCustomer(createCustomerDto);
  }

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customersService.findAllCustomer();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Customer> {
    return this.customersService.findOneCustomer(id);
  }

  @Patch(':id')
  update(
    @Param('id') id,
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.updateCustomer(id, createCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<Customer> {
    return this.customersService.removeCustomer(id);
  }

  @Put(':id')
  updatePut(
    @Param('id') id,
    @Body() createCustomerDto: CreateCustomerDto,
  ): Promise<Customer> {
    return this.customersService.updateCustomer(id, createCustomerDto);
  }
}
