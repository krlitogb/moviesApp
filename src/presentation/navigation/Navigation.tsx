import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsScreen } from '../screens/details/DetailsScreen';

export type RootStackParams = {
 Home: undefined;
 Datails: { movieId: number; };
};

const Stack = createStackNavigator();

export const Navigation = () => {
 return (
  <Stack.Navigator screenOptions={{
   headerShown: false
  }}>
   <Stack.Screen name="Home" component={ HomeScreen } />
   <Stack.Screen name="Details" component={ DetailsScreen } />
  </Stack.Navigator>
 );
}