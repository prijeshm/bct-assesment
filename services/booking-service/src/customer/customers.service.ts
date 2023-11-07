import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customer } from '../schemas/customer.schema';
import { CreateCustomerDto } from './create-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>,
  ) {}

  async findAll(): Promise<Customer[]> {
    return this.customerModel.find().exec();
  }

  async create(createCustomerDto: CreateCustomerDto): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return createdCustomer.save();
  }
}
