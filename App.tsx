import React from "react";
import {
  NativeBaseProvider, StatusBar
} from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FrontPage from "./src/pages/FrontPage";
import LoginPage from "./src/pages/LoginPage";
import RegisterPage from "./src/pages/RegisterPage";
import BottomTabs from "./components/BottomTabs";
import BoncengPage from "./src/pages/BoncengPage";
import TitipPage from "./src/pages/TitipPage";
import JajananPage from "./src/pages/JajananPage";
import ProfilePage from "./src/pages/ProfilePage";

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar barStyle='default' />
        <Stack.Navigator initialRouteName="FrontPage" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="FrontPage" component={FrontPage} />
          <Stack.Screen name="LoginPage" component={LoginPage} />
          <Stack.Screen name="BoncengPage" component={BoncengPage} />
          <Stack.Screen name="TitipPage" component={TitipPage} />
          <Stack.Screen name="JajananPage" component={JajananPage} />
          <Stack.Screen name="ProfilePage" component={ProfilePage} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} />
          <Stack.Screen name="BottomTabs" component={BottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
