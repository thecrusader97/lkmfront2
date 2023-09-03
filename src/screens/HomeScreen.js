import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { decodeJwtToken } from '../component/jwtDecode'; // Import the utility function

const HomeScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve the JWT token from AsyncStorage
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('jwtToken');

        if (token) {
          // Decode the JWT token using the utility function
          const decodedUserData = decodeJwtToken(token);
          console.log('Decoded Token:', decodedUserData);
          setUserData(decodedUserData);
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };

    getToken();
  }, []);

  return (
    <View>
        {userData && userData.user && userData.user.name ? (
        <>
            <Text>Welcome, {userData.user.name}!</Text>
            <Text>Phone: {userData.user.phone}</Text>
            <Text>Role: {userData.user.role && userData.user.role.name}</Text>
            {/* Display other user data as needed */}
        </>
        ) : (
        <Text>Unable to retrieve user data.</Text>
        )}
    </View>
  );
};

export default HomeScreen;
