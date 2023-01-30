import React, { Component } from 'react';
import {View,Text,} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Before from './components/Before';
import After from './components/After';
import AnimatedSplash from "react-native-animated-splash-screen";

class App extends React.Component {
  state = {
    isLoaded: false,
    isLogin:false,
    username:null,
    password:null
  };
  
  async componentDidMount() {

    AsyncStorage.getItem('credentials').then((data) => {
      if(data==undefined){
        this.setState({          
          isLogin:false,
          username:null,
          password:null,
          isLoaded:true,
        });
      }
      else{
        var token = JSON.parse(data);
        if(token.username==null || token.password==null ||token.username=="" || token.password==""){
          this.setState({
            isLogin:false,
            username:null,
            password:null,
            isLoaded:true,
          });
        }
      else{
        console.log(data);
        this.setState({
          isLogin:true,     //true     
          isLoaded:true,
        });
      }}    
    })
  }
  render() {
    return(
      <>
      <AnimatedSplash
        translucent={true}
        isLoaded={this.state.isLoaded}
        logoImage={require("./logo.png")}
        backgroundColor={"#000"}
        logoHeight={100}
        logoWidth={100}
        customComponent={
        <View style={{flex:1,justifyContent:'center',position:'absolute'}}>
        <Text style={{color:'#008b91',fontSize:22,padding:10,textAlign:'center'}}>CavyAI</Text></View>}>
          {this.state.isLogin?(<After/>):(<Before/>)}
      </AnimatedSplash>
      </>
      );
}
  
}

export default App;

