import express from 'express';
import bodyParser from 'body-parser';
import connectToDatabase  from './config/database';
import moviesRoutes from './routes/movies';
import theatersRoutes from './routes/theaters';
import showtimesRoutes from './routes/showtimes';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/movie', moviesRoutes);
app.use('/theater', theatersRoutes);
app.use('/showtimes', showtimesRoutes);


// Call the function to establish the database connection
connectToDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Movie Catalog Service is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
