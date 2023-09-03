// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { decode as atob } from 'base-64';

const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleRegister = () => {
    // Navigate to the registration screen when the button is pressed
    navigation.navigate('Registration');
  };
  

  const handleLogin = async () => {
    
    try {
      const response = await axios.post('http://192.168.1.3:8080/api/login', {
        phone,
        password,
      });

      const responseData = response.data;


      if (responseData.Authorization && responseData.Authorization.token) {
        const token = responseData.Authorization.token;

        // Decode the JWT token using atob
        const decodedToken = JSON.parse(atob(token.split('.')[1]));

        // Store the token and decoded data using AsyncStorage
        await AsyncStorage.setItem('jwtToken', token);
        await AsyncStorage.setItem('userData', JSON.stringify(decodedToken));

        // Navigate to the Home screen or perform any other necessary actions
        navigation.navigate('Home');
      } else {
        console.error('Login Error: Token not found in the response');
        Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
      }

    } catch (error) {
        if (error.response) {
        // Server responded with an error status code
        console.error('Login Error:', error.response.data);
        Alert.alert('Login Failed', 'Invalid email or password. Please try again.');
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('Login Error: No response from the server');
        Alert.alert('Network Error', 'Unable to connect to the server. Please check your network connection.');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Login Error:', error.message);
        Alert.alert('Login Failed', 'An error occurred during login. Please try again later.');
      }
    }
  };

  return (
    <View>
      <Text>Phone:</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="No hp"
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default LoginScreen;
