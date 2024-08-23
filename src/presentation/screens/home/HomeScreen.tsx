import { Text, View } from 'react-native';
import { useMovies } from '../../hooks/useMovies';

export const HomeScreen = () => {

 const {} = useMovies();
 return (
  <View>
   <Text style={{
    color: 'black'
   }}>HomeScreen</Text>
  </View>
 );
};
