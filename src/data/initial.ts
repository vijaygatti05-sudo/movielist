import { Movie } from "movies/MovieModel";
import moviesData from 'data/real-movies.json';

export const getInitialMovies = (): Movie[] => [...moviesData];
