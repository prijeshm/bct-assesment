import { Request, Response } from 'express';
import Theater from '../models/theater';

export const getAllTheaters = async (req: Request, res: Response): Promise<void> => {
  try {
    const theaters = await Theater.find();
    res.json(theaters);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching theaters' });
  }
};

export const addTheater = async (req: Request, res: Response): Promise<void> => {
  try {
    const theater = new Theater(req.body);
    await theater.save();
    res.json({ message: 'Theater added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding theater' });
  }
};
