import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="UserScreen" component={UserScreen} />
      
    </Tab.Navigator>
  );
}

import UserScreen from "./src/Pages/UserScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import RegisterCourier from "./src/Pages/RegisterCourier";
import EditCourier from "./src/Pages/EditCourier";
import ViewCourier from "./src/Pages/ViewCourier";
import DeleteCourier from "./src/Pages/DeleteCourier";
// import Bo from "./src/Pages/Bo";
import LoginScreen from "./src/Pages/LoginScreen";
import SignUpScreen from "./src/Pages/SignUpScreen";
import LogOut from "./src/Pages/LogOut";
import HomeScreen from "./src/Pages/HomeScreen";
import BottomTab from "./src/Pages/BottomTab";

import { auth } from "./firebase";
import * as firebase from "firebase";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen
          name="MainPage"
          component={UserScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <MaterialCommunityIcons
                name="account-circle"
                size={34}
                color="black"
                style={{ marginBottom: 5 }}
                onPress={async () => {
                  //for checking online status
                  await auth
                    .signOut()
                    .then(() => {
                      navigation.replace("Login");
                    })
                    .catch((err) => alert(err.message));
                }}
              />
            ),
            headerBlurEffect: "dark",
            headerShown: true,
            headerTitle: "",
            headerLeft: () => (
              <Text
                style={{
                  fontSize: 28,
                  color: "orange",
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                NN Courier
              </Text>
            ),
          })}
        />
        <Stack.Screen name="My Account" component={HomeScreen} />
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="Logout" component={LogOut} />
        
        <Stack.Screen name="Register" component={RegisterCourier} />
        <Stack.Screen name="View" component={ViewCourier} />
        <Stack.Screen name="Edit" component={EditCourier} />
        <Stack.Screen name="Delete" component={DeleteCourier} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
