import React,{ Component } from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ActivityIndicator,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Pie from 'react-native-pie';
import Dev from '../svg/dev_2';
import Logo from '../assets/Cavy_logo';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

const CustomSidebarMenu = (props) => {
  const [Username,setUsername]=React.useState("");
  const [Password,setPassword]=React.useState("");
  const [Theme,setTheme]=React.useState("");
  const [Resources,setResources]=React.useState(null);
  const BASE_PATH ='https://cavyiot.com/';
  const proileImage = 'logo.png';

  const refresh=(uname,pass)=>{
    setResources(null)
    console.log('aalo')
    fetch("https://api.cavyiot.com/getAnnId?userid="+uname+"&password="+pass)
      .then((response) => response.json())
      .then((json) => {
        var last_updated=Date.now();
        json.last_updated=timeConverter(last_updated);
        AsyncStorage.setItem('myModels', JSON.stringify(json));
        setResources(json.ann_list.length);
        })
      .catch((error) => {console.log('ok') })
  }

  React.useEffect(() => {
    AsyncStorage.getItem('theme').then((data) => {setTheme(data)})
    AsyncStorage.getItem('credentials').then((data) => {
      var cred=JSON.parse(data);
      setUsername(cred.username);
      setPassword(cred.password);
      // fetch("https://inose.cavyiot.com/api/getAnnId?userid="+cred.username+"&password="+cred.password)
      // .then((response) => response.json())
      // .then((json) => {
      //   var last_updated=Date.now();
      //   json.last_updated=timeConverter(last_updated);
      //   AsyncStorage.setItem('myModels', JSON.stringify(json));
      //   setResources(json.ann_list.length);
      //   })
      // .catch((error) => {console.log('ok') })
      setResources(5);
    })
  },[]);
  return (
    <SafeAreaView style={{flex: 1,
                          backgroundColor:(Theme=="dark"?"#0f0f0f":"#fafafa"),
                          borderWidth:0,
                          borderRightColor:'#008b91'}}>
      <View style={{marginHorizontal:20,marginTop:30}}>
      <Logo/>
      </View>
      {/* <View style={(Theme=="dark"?styles.customItem:style.customItem)}>
        <Text
          style={{
            color: 'grey',
            flex:1
          }}
          onPress={() => {
            if(Theme=="dark"){
              console.log("light");
            AsyncStorage.setItem('theme', "light");
            setTheme("light");
            }
            else {AsyncStorage.setItem('theme', "dark");setTheme("dark");console.log("dark");}
            }}>
            Theme
          </Text>
        </View> */}
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <View style={styles.customItem}>
        <Text
          style={{
            color: 'grey'
          }}
          onPress={() => {
              Linking.openURL('https://ai.cavyiot.com/');
            }}>
            Visit Us
          </Text>
        </View>
        
      </DrawerContentScrollView>
      {/* {Resources!=null?(
        <View style={[(Theme=="dark"?styles.resources:style.resources), {flexDirection: "row"}]}>
        <View style={{alignItems: 'center',flex:1 }}>
                <Pie
                  radius={20}
                  innerRadius={17}
                  sections={[
                    {
                      percentage: Resources*10,
                      color: '#008b91',
                    },
                  ]}
                  backgroundColor="#ddd"
                />
                <View
                  style={styles.gauge}
                >
                  <Text
                    style={(Theme=="dark"?styles.gaugeText:style.gaugeText)}
                  >
                    {Resources*10}%
                  </Text>
                </View>
                </View>
              <View style={{flex:3 }}>
              <Text
                  style={{
                  fontSize: 14,
                  color: '#008b91'
                  }}>
                    Resources Used
                </Text>
                <Text
                  style={{
                  fontSize: 12,
                  color: 'grey'
                  }}>
                    Limit 10
                </Text>
              </View>
              <View style={{flex:0.5,padding:5}}>
                  <TouchableOpacity style={{}} onPress={()=>refresh(Username,Password)}>
                  <Icon name="refresh" size={17} color={'#c75116'}/>
                </TouchableOpacity>
              </View>
          </View>
      ):(<View style={styles.resources}><ActivityIndicator size="small" color="#008b91"/></View>)} */}
      
      <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          color: 'grey',
          margin:10
        }}>
        ai.cavyiot.com
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    marginTop:20,
    width: '100%',
    height: 180,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    //color:'red'
  },
  gauge: {
    position: 'absolute',
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#fff',
    fontSize: 10,
  },
  resources: {
    flex: .1,
    padding:15,
  },
});
const style = StyleSheet.create({//////////LIGHT THEME
  sideMenuProfileIcon: {
    resizeMode: 'center',
    marginTop:20,
    width: '100%',
    height: 180,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    //color:'red'
  },
  gauge: {
    position: 'absolute',
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    backgroundColor: 'transparent',
    color: '#0a0a0a',
    fontSize: 10,
  },
  resources: {
    flex: .1,
    padding:15,
  },
});

export default CustomSidebarMenu;