import * as React from 'react';
import { Button, View, Text } from 'react-native';

function Register({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Register Screen</Text>
      <Button
        title="Go"
        onPress={() => {console.log("I M Here");}}
      />
    </View>
  );
}
export default Register;
