import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import TabNavigation from './navigation/TabNavigation';

enableScreens();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
