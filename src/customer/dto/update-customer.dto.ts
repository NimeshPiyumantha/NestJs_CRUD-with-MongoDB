import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  readonly nic: string;
  readonly name: string;
  readonly email: string;
  readonly contact: string;
}
