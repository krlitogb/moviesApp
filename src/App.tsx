import 'react-native-gesture-handler';


import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, } from 'react-native';
import { Navigation } from './presentation/navigation/Navigation';

function App(): React.JSX.Element {

 return (
  <NavigationContainer>
   <Navigation/>

  </NavigationContainer>
 );
}


export default App;
