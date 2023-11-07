import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Booking, BookingDocument } from './booking.model';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<BookingDocument>,
  ) {}

  async createBooking(bookingData: Booking): Promise<Booking> {
    const createdBooking = new this.bookingModel(bookingData);
    return createdBooking.save();
  }

  async findAllBookings(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }
}
