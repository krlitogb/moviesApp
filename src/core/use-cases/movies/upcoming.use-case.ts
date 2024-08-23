import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { MovieDBMoviesResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import type { Movie } from '../../entities/movie.entity';


export const moviesUpcomigUseCase = async ( fetcher: HttpAdapter ): Promise<Movie[]> => {

 try {
  const upcoming = await fetcher.get<MovieDBMoviesResponse>( '/upcoming' );

  return upcoming.results.map( MovieMapper.formMovieDBResultToEntity );


 } catch ( error ) {
  throw new Error( `Error fetching movies - UpcomingUseCase ${ error }` );
 }

};