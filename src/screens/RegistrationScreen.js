// RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://192.168.1.3:8080/api/register', {
        name,
        phone,
        password,
        password_confirmation: passwordConfirmation,
      });

       // Handle a successful registration response here.
       Alert.alert('Registration Successful', 'You are now registered!', [
        {
          text: 'Go to Login',
          onPress: () => navigation.navigate('Login'), // Navigate to the Login screen
        },
      ]);
    } catch (error) {
      if (error.response) {
        // The request was made, and the server responded with a non-2xx status code
        console.error('Registration Error:', error.response.data);
    
        // Display the server's error message to the user
        Alert.alert('Registration Failed', error.response.data.message || 'An error occurred during registration.');
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('Registration Error:', error.request);
    
        // Handle the case where there is no response from the server
        Alert.alert('Registration Failed', 'No response received from the server.');
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Registration Error:', error.message);
    
        // Handle other types of errors
        Alert.alert('Registration Failed', 'An error occurred during registration. Please try again later.');
      }
    }
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Name"
      />
      <Text>Phone:</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
      />
      <Text>Password:</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Text>Confirm Password:</Text>
      <TextInput
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        secureTextEntry={true}
        placeholder="Confirm Password"
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationScreen;