import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, StyleSheet } from 'react-native';
import React from "react";

import About from "./src/About";
import Home from "./src/Home";
import Quiz from "./src/Quiz";
import Map from "./src/Map";
// import Contact from "./src/Contact";


export default function App() {
  
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Quiz" component={Quiz} />
        {/* <Stack.Screen name="Contact" component={Contact} /> */}
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    backgroundColor: 'red',
  }
  
});