import React from 'react';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import TabNavigation from './navigation/TabNavigation';

// Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import cartReducer from './store/reducers/cart';

enableScreens();

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </Provider>
  );
}
