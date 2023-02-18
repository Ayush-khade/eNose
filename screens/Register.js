import * as React from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';


export default class Register extends React.Component {
  state = {
    name: "",
    emailID: "",
    password: "",
    confirm_password: "",
    secure: true

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Not registered yet?        Register Here    </Text>
        <TextInput
          style={styles.input}
          value={this.state.value}
          onChangeText={(v) => { this.setState({ name: v }) }}
          placeholder="Enter Your Name"
        />
        <TextInput
          style={styles.input}
          value={this.state.value}
          onChangeText={(v) => { this.setState({ emailID: v }) }}
          placeholder="Enter Your EmailID"
        />

        <TextInput
          style={styles.input}
          value={this.state.value}
          onChangeText={(v) => { this.setState({ password: v }) }}
          placeholder="Enter Your password"
          secureTextEntry={this.state.secure}

        />

        <TextInput
          style={styles.input}
          value={this.state.value}
          onChangeText={(v) => { this.setState({ confirm_password: v }) }}
          placeholder="Enter Your confirm password"
          secureTextEntry={this.state.secure}
        />

        {this.state.password == this.state.confirm_password ? <Text>matched</Text> : <Text>"Password did not match..."</Text>}


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#362287',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#cccccc"
  },
});
