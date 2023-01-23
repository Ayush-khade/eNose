import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Before from './screens/Before'
import After from './screens/After'
class App extends React.Component {
  state={
    isLogin:false
  }
  componentDidMount(){
    AsyncStorage.getItem('credentials').then((data) => {
      if(data==undefined){
        this.setState({          
          isLogin:false,
        });
      }
      else{
        var token = JSON.parse(data);
        if(token.username==null || token.password==null ||token.username=="" || token.password==""){
          this.setState({
            isLogin:false,
          });
        }
      else{
        console.log(data);
        this.setState({
          isLogin:true,
        });
      }}    
    })
  }

  render(){
    return (
      <>
        {this.state.isLogin?(<After/>):(<Before/>)}
      </>
    );
}
  
}

export default App;
