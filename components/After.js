import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, CardStyleInterpolators, } from '@react-navigation/native-stack';
// import trainData from './trainData';
// import myModels from './myModels';
// import mySettings from './settings';
// import predictData from './predictData';
// import proDashboard from './proDashboard';
// import prediction from './prediction';
// import examplesPage from './examples';
// import newTrain from './newTrain';
// import collectData from './collectData';
// import predictUsing from './predictUsing';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import CustomSidebarMenu from '../components/CustomSidebarMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';
//import { enableScreens } from 'react-native-screens';
// import dataDetails from "./dataDetails";
// import defineClasses from "./defineClasses";
// import startCollecting from "./startCollecting";
// import collectionComplete from "./collectionComplete";
// import proceedTrain from "./proceedTrain";
// import training from "./training";
// import selectInputs from "./ioSelection";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Enose from '../svg/enose';
import Temp from './Temp'
{/* <TouchableOpacity
            onPress={() => { userLogout() }}>
            <Icon
              name="sign-out-alt"
              size={22}
              color="#fff"
              style={{ width: 25, height: 25, marginRight: 5 }} />
          </TouchableOpacity> */}



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
var pid;
var ip;
var ws;
function deviceType(){
  ws.send('{"action":"getDeviceType"}');
  ws.onmessage = (event) => {console.log(event.data);}
}



function reconnect(){
  AsyncStorage.getItem('credentials').then((data) => {
    var cred = JSON.parse(data);
    pid = cred.username;
    fetch('https://practice.cavyiot.com/api/' + pid + '/enose/getWebSocketIp')
      .then(response => response.json())
      .then(data => {
        console.log(data.ip); ip = data.ip;
  
        ws = new WebSocket("ws://" + data.ip + ":81/")
        //ws = new WebSocket("ws://" + "192.168.138.213" + ":81/")
        console.log("Trying to connect");
        ws.onopen = () => {
          //setInterval(ping, 5000);
          // setTimeout(() => {
          //   ws.send('{"action":"getDeviceType"}');
          // }, 1000);
          deviceType()
          console.log("open");
  
        }
        ws.onmessage = (event) => {/*if(event.data == 'pong'){pong()}*/return event; }
        ws.onerror = (error) => { console.log("ERROR", error); }
        ws.onclose = (msg) => { console.log("OnCLOSE", msg); }
  
  
  
      });
  
  })
}




AsyncStorage.getItem('credentials').then((data) => {
  var cred = JSON.parse(data);
  pid = cred.username;
  fetch('https://practice.cavyiot.com/api/' + pid + '/enose/getWebSocketIp')
    .then(response => response.json())
    .then(data => {
      console.log(data.ip); ip = data.ip;

      ws = new WebSocket("ws://" + data.ip + ":81/")
      //ws = new WebSocket("ws://" + "192.168.138.213" + ":81/")
      console.log("Trying to connect");
      ws.onopen = () => {
        //setInterval(ping, 5000);
        console.log("open");
        deviceType()
        // setTimeout(() => {
        //   ws.send('{"action":"getDeviceType"}');
        // }, 1000);
        

      }
      ws.onmessage = (event) => {/*if(event.data == 'pong'){pong()}*/return event; }
      ws.onerror = (error) => { console.log("ERROR", error); }
      ws.onclose = (msg) => { console.log("OnCLOSE", msg); }



    });

})
export { ws };
export function Con(props) {

  return (
    <>
      {props.data ? (<View
        style={{
          backgroundColor: "#2f2f2f",
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: "#008b91",
            paddingVertical: 8,
            fontWeight: "bold",
            fontSize: 14,
            alignSelf: "center",
          }}
        >
          <EntypoIcon name="signal" size={20} />{"  "}Connected to Product ID - {pid}
        </Text>
      </View>) : (<View
        style={{
          backgroundColor: "#2f2f2f",
          paddingHorizontal: 15,
        }}>
        <Text
          style={{
            color: "#d14545",
            paddingVertical: 8,
            fontWeight: "bold",
            fontSize: 14,
            alignSelf: "center",
          }}
        >
          <EntypoIcon name="signal" size={20} />{"  "}Connecting
        </Text>
      </View>)}
    </>
  )
}
var tm;



// function ping() {
//         //console.log("Sending Ping")
//         ws.send('ping');
//         tm = setTimeout(() => {          
//           console.log("Conn Closed")
//         }, 2500);
//   }  
// function pong() {
//         clearTimeout(tm);
//         //console.log("Got Pong")
//       }        

export default function After({ navigation }) {

  return (
    <>

      <NavigationContainer independent={true}>
        <Drawer.Navigator
          //detachInactiveScreens={enableScreens(true)}
          drawerType="front"
          initialRouteName="prediction"
          edgeWidth={200}
          screenOptions={{
            activeTintColor: '#008b91',
            itemStyle: { marginVertical: 5 },
            inactiveTintColor: '#ccc',
          }}
          drawerContent={(props) => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen
            name="prediction"
            options={{
              drawerLabel: 'Live Prediction',
              drawerIcon: ({ focused, size }) => (
                <Icon1
                  name="dashboard"
                  size={16}
                  color={focused ? '#7cc' : '#ccc'}
                  style={{ margin: 0 }}
                />
              ),
            }}
            component={Temp}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </>
  );
}
const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Icon name="bars" size={22} color="#fafafa" style={{ width: 25, height: 25, marginLeft: 10 }} />
      </TouchableOpacity>
    </View>
  );
};
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