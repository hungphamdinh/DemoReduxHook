import React from 'react';
import MainScreen from './src/features/Login/view/MainScreen';
import LoginScreen from './src/features/Login/view/index';
import MenuFeature from './src/features/MenuFeature/component';
import configureStore from './src/store/coonfigureStore';
import InsertItem from './src/features/InsertItem/view/index';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const store = configureStore();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MenuFeature"
            component={MenuFeature}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="InsertItem"
            component={InsertItem}
            options={{title: 'Thêm hàng'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
