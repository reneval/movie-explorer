import { Movie, MovieInfo } from "@/types/movie";
import axios from "axios";

export const fetchMovies = async (searchTerm: string): Promise<Movie[]> => {
  const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${import.meta.env.VITE_API_KEY}`);
  return response.data.Search || [];
};

export const fetchMovieDetails = async (imdbId: string): Promise<MovieInfo> => {
  const response = await axios.get(`http://www.omdbapi.com/?i=${imdbId}&apikey=${import.meta.env.VITE_API_KEY}`);
  return response.data;
};
