import { Controller, Get } from '@nestjs/common';
import { ShowtimeService } from './showtime.service';
import { Showtime } from './showtime.schema';

@Controller('showtimes')
export class ShowtimeController {
  constructor(private readonly showtimesService: ShowtimeService) {}

  @Get()
  async findAll(): Promise<Showtime[]> {
    return this.showtimesService.findAll();
  }
}
