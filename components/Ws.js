import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
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