import { Image } from 'react-native';
import {
StyleSheet,
Text,
View,
TextInput,
TouchableOpacity,
Button,
ToastAndroid,

} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Login extends React.Component {
    state = {
        username : "",
        password : "",
            }
    verifyCred=(x,y)=>{
        console.log("USERNAME::",x);
        console.log("PASSWORD::",y);
        if(x=="" || y==""){ToastAndroid.show("Please Enter the username & password!", ToastAndroid.SHORT);}
        else{
                 if(x=="suyash" && y=="1234"){
                    var credentials={};
                    credentials.username=this.state.username;
                    credentials.password=this.state.password;
                    const jsonValue = JSON.stringify(credentials);
                    AsyncStorage.setItem('credentials', jsonValue);
                console.log("SUCCESSFUL");
            }
                 else{ToastAndroid.show("Incorrect Credentials", ToastAndroid.SHORT);}
            }
                      }
    render(){
        return(
            <View style={{flex:1,alignItems:"center",backgroundColor:"#ffffff"}}>
                
               <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
               <Text style={{fontSize:20,color:"#717ade",margin:10}}>Login</Text>
               <TextInput
		            style={{ width: 400, height: 50,borderWidth: 1, borderColor: "#000000", margin: 5}}
                    onChangeText = {val=> this.setState({username: val})}
                    value = {this.state.username}
                    placeholder="username"
		        />
                <TextInput
		            secureTextEntry={true}
		            style={{ width: 400, height: 50,borderWidth: 1, borderColor: "#000000", margin: 5}}
                    onChangeText = {val=> this.setState({password: val})}
                    value = {this.state.password}
                    placeholder="password"
		        />
                </View>            
               <Button
                    title="Log In"
                    onPress={() => this.verifyCred(this.state.username,this.state.password)}
                />
                
            </View>
        )
    }
  }


  //ASYNC storage implementation