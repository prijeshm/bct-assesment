import { Request, Response } from 'express';
import Showtime from '../models/showtime';

export const getShowtimesForMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const movie = req.params.movieId;
    const showtimes = await Showtime.find({ movie })
      .populate('movie', ['title', 'genre']) // Populate the movie name and genre
      .populate('theater', 'name'); // Populate the theater name
    res.json(showtimes);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error fetching showtimes' });
  }
};
