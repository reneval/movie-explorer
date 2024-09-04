import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Movie, MovieInfo } from "@/types/movie";
import { fetchMovieDetails, fetchMovies } from "@/api/movieAPI";
import { debounce } from "@/lib/debounce";
import { useQuery } from "react-query";

interface MovieContextType {
  selectedMovie: Movie | null;
  searchTerm: string;
  searchResults: Movie[];
  setSearchTerm: (term: string) => void;
  selectMovie: (movie: Movie) => void;
  fetchMovieDetails: (imdbID: string) => void;
  isMoviesLoading: boolean;
  selectedMovieDetails: MovieInfo | null;
  isMovieDetailsLoading: boolean;
  isEditing: boolean;
  setIsEditing: (isEdit: boolean) => void;
  editMovieDetails: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedMovieDetails, setSelectedMovieDetails] = useState<Movie | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const { refetch: searchMovies, isLoading: isMoviesLoading } = useQuery<Movie[]>(
    ["movies", searchTerm],
    () => fetchMovies(searchTerm),
    {
      enabled: false,
      onSuccess: (data) => {
        setSearchResults(data);
      },
    },
  );
  const { refetch: searchMovieDetails, isLoading: isMovieDetailsLoading } = useQuery<MovieInfo>(
    ["movie-details", selectedMovie?.imdbID],
    () => fetchMovieDetails(selectedMovie?.imdbID || ""),
    {
      enabled: false,
      onSuccess: (data) => {
        setSelectedMovieDetails(data);
      },
    },
  );

  // Debounced search function
  const debouncedSearchMovies = useCallback(
    debounce((term: string) => {
      setSearchTerm(term);
      if (term) {
        searchMovies();
      } else {
        setSearchResults([]);
      }
    }, 500),
    [],
  );

  useEffect(() => {
    if (selectedMovie) {
      searchMovieDetails();
    }
  }, [selectedMovie, searchMovieDetails]);

  useEffect(() => {
    debouncedSearchMovies(searchTerm);
  }, [searchTerm, debouncedSearchMovies]);

  const selectMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const editMovieDetails = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (selectedMovieDetails) {
      setSelectedMovieDetails({
        ...selectedMovieDetails,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <MovieContext.Provider
      value={{
        isMoviesLoading,
        selectedMovie,
        searchTerm,
        searchResults,
        setSearchTerm,
        selectMovie,
        editMovieDetails,
        fetchMovieDetails,
        selectedMovieDetails,
        isMovieDetailsLoading,
        isEditing,
        setIsEditing,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
