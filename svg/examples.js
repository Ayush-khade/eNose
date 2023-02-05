import * as React from 'react';
import {Button, View, Text, SafeAreaView,ActivityIndicator,TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';
import CommingSoonSvg from '../svg/buildingBlocks';
import WS from 'react-native-websocket';


const examplesPage = ({navigation}) => {
  //this.refs.webview.reload();
  return (
    <SafeAreaView style={{height:'100%'}}>
      <View style={{flex:1,justifyContent:'center'}}>
      {/* <WebView source={{ uri: 'https://ai.cavyiot.com/examples/' }}
      startInLoadingState={true}
      renderLoading={() =><ActivityIndicator size="large" color="#008b91" style={{position:'absolute',top:0,bottom:0,alignSelf:'center'}}/>}
      allowFileAccess={true}
      pullToRefreshEnabled={true}
      /> */}
      <WS 
          ref={ref => {this.ws = ref}}
          url="ws://192.168.1.101:81/"
          onOpen={() => {
            console.log('Open!')
            this.ws.send('{"action":"brainlist"}')
            }}
          onMessage={(x)=>console.log(JSON.parse(x.data).model[0])}
          onError={(x)=>console.log(x)}
          onClose={(x)=>console.log(x)}
          reconnect // Will try to reconnect onClose
          />
           
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{console.log('Open!123');this.ws.send('{"action":"brainlist"}')}}>
                <View style={{borderTopWidth:0.4,borderTopColor:'#008b91'}}>
                  <Text style={{color:'#008b91',
                                fontSize:16,
                                padding:10,
                                marginTop:0}}>
                    Predict using saved ANN</Text>
                </View>
              </TouchableOpacity>

        </View>
    </SafeAreaView>
  );
};

export default examplesPage;