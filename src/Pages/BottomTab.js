import { StyleSheet, Text, View } from "react-native";

import React from "react";


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RegisterCourier from "./RegisterCourier";



import ViewCourier from "./ViewCourier";
import UserScreen from "./UserScreen";
// import HomeScreen from "./src/Pages/HomeScreen";
// import UserScreen from "./UserScreen";


const BottomTab = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "#3b71f3",

        tabBarLabelStyle: {
          fontSize: 18,
               
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name='home' size={24} color="black" />
          ),
        }}
        name="MainPage"
        component={UserScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name='account' size={24} color="black" />
          ),
        }}
        name="Register"
        component={RegisterCourier} 
      />
      
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
