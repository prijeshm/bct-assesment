import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Showtime, ShowtimeDocument } from './showtime.schema';

@Injectable()
export class ShowtimeService {
  constructor(
    @InjectModel(Showtime.name) private showtimeModel: Model<ShowtimeDocument>,
  ) {}

  async findAll(): Promise<Showtime[]> {
    return this.showtimeModel
      .find()
      .populate('movie', 'title') // Populate movie with title and genre
      .populate('theater', 'name')
      .select('show_time ticket_price seats_available'); // Select fields to include
  }
}
