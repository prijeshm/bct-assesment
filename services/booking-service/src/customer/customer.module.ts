import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { Customer, CustomerSchema } from '../schemas/customer.schema'; // Import the Customer schema

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Customer.name, schema: CustomerSchema },
    ]), // Register the Customer schema
  ],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
