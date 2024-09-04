export type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

export type MovieInfo = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Genre?: string;
  Director?: string;
  Plot?: string;
  Actors?: string;
  Ratings?: Array<{ Source: string; Value: string }>;
};
