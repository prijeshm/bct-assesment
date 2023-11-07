import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Booking, BookingDocument } from './booking.schema';

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
    return this.bookingModel
      .find()
      .populate('customer', 'name')
      .populate('showtime', 'show_time')
      .populate('movie', 'title')
      .populate('theater', ['name', 'location'])
      .exec();
  }
}
