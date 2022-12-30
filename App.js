import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import EventListScreen from './Listings';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} 
          options = {{headerShown: false}}
        />
        <Stack.Screen name="EventList" component={EventListScreen}
          options = {{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>hhh
  );
}

export default App;
