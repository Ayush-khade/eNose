import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Register"
        onPress={() => {navigation.navigate('Register');console.log("I M Here");}}
      />
    </View>
  );
}


export default Login;
