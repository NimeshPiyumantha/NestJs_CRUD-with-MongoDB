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
import { ItemsService } from './customer.service';
import { Item } from './interfaces/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createCustomerDto: CreateCustomerDto): string {
    // return this.customerService.create(createCustomerDto);
    return `ID :${createCustomerDto.id} Name :${createCustomerDto.name} Email :${createCustomerDto.email} Contact :${createCustomerDto.contact}`;
  }

  @Get()
  findAll(): string {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return this.customerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): string {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id): string {
    return this.customerService.remove(+id);
  }

  @Put(':id')
  updatePut(
    @Param('id') id,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ): string {
    // return this.customerService.update(+id, updateCustomerDto);
    return `Update :${id} - Name :${updateCustomerDto.name}`;
  }
}
