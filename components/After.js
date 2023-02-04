import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function App() {
  //This is Hemant

  React.useEffect(()=>{ 

  },[])
  return (
    <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Hello, world!</Text>
        <Button title={"LOGOUT"} onPress={userLogout}/>
      </View>
  );
}
const userLogout = () => {
  var credentials = {};
  credentials.username = null;
  credentials.password = null;
  const jsonValue = JSON.stringify(credentials);
  AsyncStorage.setItem('credentials', jsonValue);
  //console.log(jsonValue);
  try { AsyncStorage.clear() } catch (e) { /*console.log(e)*/ }
  //console.log('Done.')
  // setTimeout(() => {
  //   RNRestart.Restart();
  // }, 500);
}

export default App;