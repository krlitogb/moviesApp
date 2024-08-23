import { useEffect, useState } from 'react';
import type { Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';
import { NowPlayingResponse } from '../../infrastructure/interfaces/movie-db.responses';

let popularPageNumber = 1;

export const useMovies = () => {

 const [ isLoading, setIsLoading ] = useState( true );
 const [ nowPlaying, setNowPlaying ] = useState<Movie[]>( [] );
 const [ popular, setPopular ] = useState<Movie[]>( [] );
 const [ topRated, setTopRated ] = useState<Movie[]>( [] );
 const [ upcoming, setUpcoming ] = useState<Movie[]>( [] );

 useEffect( () => {
  
  initialLoad();

 }, [] );

 const initialLoad = async () => {
  const nowPlayingPromise = UseCases.moviesNowPlayingUseCase( movieDBFetcher );
  const popularPromise = UseCases.moviesPopularUseCase( movieDBFetcher );
  const topRatedPromise = UseCases.moviesTopRatedUseCase( movieDBFetcher );
  const upcomingPromise = UseCases.moviesUpcomigUseCase( movieDBFetcher );

  const[
   nowPlayingMovies,
   popularMovies,
   topRatedMovies,
   upcomigMovies,
  ] = await Promise.all([
   nowPlayingPromise,
   popularPromise,
   topRatedPromise,
   upcomingPromise,
  ])

  setNowPlaying( nowPlayingMovies);
  setPopular(popularMovies);
  setTopRated(topRatedMovies);
  setUpcoming(upcomigMovies);

  setIsLoading(false);

 };

 return {
  isLoading,
  nowPlaying,
  popular,
  topRated,
  upcoming,


  //Methods
  popularNextPage: async() => {
   popularPageNumber++;
   const popularMovies = await UseCases.moviesPopularUseCase( movieDBFetcher, {
    page: popularPageNumber,
   } )
   setPopular( prev => [...prev, ...popularMovies])
  }

 };
};
