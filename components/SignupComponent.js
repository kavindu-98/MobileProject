import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Input, Button} from 'react-native-elements';

const API_URL = 'http://192.168.1.107:8080/users/';

const SignupComponent = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pic, setPic] = useState('');
  const [field, setField] = useState([]);

  const signup = () => {
    const payload = {
      name,
      email,
      password,
    };

    try {
      fetch(`${API_URL}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      navigation.navigate('Home');
      setName('');
      setPassword('');
      setConfirmPassword('');
      setEmail('');
      setPic('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#5680E9"
        translucent={true}
      />

      <View>
        <Input
          placeholder="Enter your name"
          autoFocus
          value={name}
          onChangeText={text => setName(text)}
        />
        <Input
          placeholder="Enter your email"
          autoFocus
          value={email}
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <Input
          placeholder="Re-enter password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
        <Input
          placeholder="Profile Picture"
          value={pic}
          onChangeText={text => setPic(text)}
        />
      </View>

      <Button title="Signup" onPress={signup} />
    </KeyboardAvoidingView>
  );
};

export default SignupComponent;

const styles = StyleSheet.create({});
