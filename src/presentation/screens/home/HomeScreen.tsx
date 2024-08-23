import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {

 const { top } = useSafeAreaInsets();

 const { isLoading, nowPlaying, popular, topRated, upcoming, popularNextPage } = useMovies();

if (isLoading ){
 return (<Text>Cargando...</Text>)
}
 return (
  <ScrollView>
   <View style={ { marginTop: top + 20, paddingBottom: 30 } }>
    
    {/*Principal */}
    <PosterCarousel
    movies= {nowPlaying}
    />

    {/*Popular */}
    <HorizontalCarousel 
    movies= { popular } 
    title= 'Populares'
    loadNextPage={ popularNextPage }
    />
    
    
    {/*Top Rated */}
    <HorizontalCarousel movies= { topRated } title= 'Mejor calificadas'/>
    
    
    {/*Próximanente */}
    <HorizontalCarousel movies= { upcoming } title= 'Próximamente'/>

   </View>
  </ScrollView>
 );
};
