import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import SignUp from './signup';
const Stack = createNativeStackNavigator();

const BeforeLogin = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="SignUp" component={SignUp} />
        {/*<Stack.Screen name="SignUp" component={SignUp} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default BeforeLogin;