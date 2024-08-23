import { AxiosAdapter } from './http/axios.adapter';



export const movieDBFetcher = new AxiosAdapter({
 baseUrl: 'https://api.themoviedb.org/3/movie',
 params:{
  api_key: '1eaa9280b5f2bd1bdcbaf38dee6d3c08',
  language: 'es',
 }
})