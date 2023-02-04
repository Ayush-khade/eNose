import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from "react-native-restart";
import EntypoIcon from "react-native-vector-icons/Entypo";
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
        <EntypoIcon name="signal" size={20} />
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
  setTimeout(() => {
    RNRestart.Restart();
  }, 500);
}

export default App;