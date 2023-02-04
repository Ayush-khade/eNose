import React, {Component, useRef} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  ToastAndroid,
  StatusBar,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import After from './After';
import Logo from '../assets/Cavy_logo';
//import Toast from 'react-native-toast-message';
import {CameraScreen} from 'react-native-camera-kit';
import RNFS from 'react-native-fs';
export default class Login extends Component {
  state = {
    isLogin: false,
    isLoading: false,
    username: null,
    password: null,
    textA: 'Scan Product ID QR-Code',
    scan: true,
  };
  onSuccess = e => {
    console.log(e);
    this.setState({isLoading: true});
    this.setSession(e);
    //console.log(e.data);
  };
  setSession = x => {
    //this.setState({reactivate:false});
    fetch('https://practice.cavyiot.com/api/' + x + '/enose/verifyPID')
      .then(response => response.json())
      .then(json => {
        if (json.code === 1) {
          var credentials = {};
          credentials.username = x;
          credentials.password = 'khade@123';
          const jsonValue = JSON.stringify(credentials);
          AsyncStorage.setItem('credentials', jsonValue);
          this.setState({
            username: x,
            password: 'khade@123',
          });
          //AsyncStorage.setItem("5114930dae", "[]");//DATASETS
          var path = RNFS.DocumentDirectoryPath + '/' + x + '.js';
          RNFS.exists(path)
            .then(que => {
              console.log('CHECK FILE IS EXISTED:: ', que);
              if (!que) {
                RNFS.writeFile(path, '[]', 'utf8')
                  .then(success => {
                    console.log('JSON FILE WRITTEN!');
                    this.setState({isLoading: false, isLogin: true});
                  })
                  .catch(err => {
                    console.log(err.message);
                  });
              }
              else{
                console.log('JSON FILE already WRITTEN!');
                this.setState({isLoading: false, isLogin: true});
              }
            })
            .catch(err => {
              return;
            });
        } else {
          //this.setState({reactivate:true});
          //this.scanner.reactivate();

          if (json.code === 401) {
            this.setState({username: null, password: null, isLoading: false,scan:true});
            // Toast.show({
            //   type: 'error',
            //   position: 'top',
            //   text1: 'Incorrect authentication credentials !',
            //   text2: 'Try again with correct credentials !',
            //   visibilityTime: 3000,
            //   autoHide: true,
            //   topOffset: 30,
            // });
            this.setState({username: null, password: null, isLoading: false,scan:true});
            return;
          } else {
            this.setState({username: null, password: null, isLoading: false,scan:true});
            // Toast.show({
            //   type: 'error',
            //   position: 'top',
            //   text1: 'Something Went Wrong !',
            //   text2: 'Try again with correct credentials !',
            //   visibilityTime: 2000,
            //   autoHide: true,
            //   topOffset: 30,
            // });
          }
        }
      })
      .catch(error => {
        this.setState({isLoading: false,scan:true});
        // Toast.show({
        //   type: 'error',
        //   position: 'top',
        //   text1: 'Something went wrong !',
        //   text2: 'Check your internet Connection !',
        //   visibilityTime: 3000,
        //   autoHide: true,
        //   topOffset: 30,
        // })
      });
  };

  render() {
    /*if (this.state.isLoading) {
      return(
        <View style={[styles.container, styles.horizontal]}>
          <StatusBar hidden></StatusBar>  
          <ActivityIndicator size="large" color="#008b91"/>
        </View>)}*/
    if (this.state.isLogin) {
      return <After/>;
    }
    return (
      <>
        {this.state.isLoading && (
          <View
            style={{
              flex: 1,
              position: 'absolute',
              height: '100%',
              width: '100%',
              backgroundColor: '#00000088',
              justifyContent: 'center',
              zIndex: 100,
            }}>
            <View
              style={{
                width: '90%',
                backgroundColor: '#2b2b2b',
                borderRadius: 10,
                borderRadius: 5,
                alignSelf: 'center',
              }}>
              <View style={{marginVertical: 25, flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <ActivityIndicator size="large" color="#e34646" />
                </View>
                <View style={{flex: 2, justifyContent: 'center'}}>
                  <Text style={{color: '#e34646', fontSize: 16}}>
                    Verifying...
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
        <View style={{flexDirection: 'column', flex: 1}}>
          <View style={{flex: 3, justifyContent: 'center'}}>
            <CameraScreen
              ratioOverlay={'1:1'}
              scanBarcode={this.state.scan}
              surfaceColor={'#008b91'}
              //onRead={this.onSuccess}
              onReadCode={event => {
                this.setState({scan: false});
                this.onSuccess(event.nativeEvent.codeStringValue);
              }} // optional
              showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
              laserColor="#008b91" // (default red) optional, color of laser in scanner frame
              frameColor="red" // (default white) optional, color of border of scanner frame
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: '#000000',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <View style={{margin: 60}}>
              <Logo />
              <Text
                style={[{color: '#737373', fontSize: 12, alignSelf: 'center'}]}>
                Building responsible
                <Text style={{color: '#008b91'}}> ANN </Text>
                model for everyone
              </Text>
            </View>
          </View>
        </View>
      </>
    );
  }
}
