import { Request, Response } from 'express';
import Movie from '../models/movie';

export const getAllMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    console.log('getAllMovies')
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error fetching movies' });
  }
};

export const addMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.json({ message: 'Movie added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding movie' });
  }
};
