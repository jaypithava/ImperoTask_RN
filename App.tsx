// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductScreen from './screens/ProductScreen';
import ColorDesignScreen from './screens/ColorDesignScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProductScreen"
          component={ProductScreen}
        />
        <Stack.Screen name="ColorDesignScreen" component={ColorDesignScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
