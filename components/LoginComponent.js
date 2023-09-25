import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

import React, {useEffect, useState} from 'react';
import {Input, Button} from 'react-native-elements';
import axios from 'axios';

const API_URL = 'http://192.168.1.107:8080/users/';

const LoginComponent = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const register = async () => {
    const payload = {
      email,
      password,
    };

    try {
      fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
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
          placeholder="Email"
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
      </View>

      <Button 
        
      
      title="Login" onPress={register} />
    </KeyboardAvoidingView>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({});
