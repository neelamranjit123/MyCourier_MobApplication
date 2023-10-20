import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

import { auth } from "../../firebase";


function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.navigate("Home");
  //     }
  //   });
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.replace("Home");
  //     }
  //   });
  //   return unsubscribe;
  // }, []);

  // const handleSignIn = () => {
    
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((userCredential) => {
  //       var user = userCredential.user;
  //       console.log("User signin with:", user.email);
  //     })
  //     .catch((error) => alert(error.message));
  // };

  const handleSignIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("User sign with:", user.email);
        navigation.navigate("Home");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={{ padding: 20, flex: 1, justifyContent: "center" }}>
      <Image
        source={require("../../assets/3.png")}
        style={{
          width: "100%",
          height: 250,
          resizeMode: "contain",
        }}
      />

      <View style={styles.inputContainer}>
        <AppTextInput
          placeholder="Email"
          icon="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <AppTextInput
          placeholder="Password"
          icon="lock"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={handleSignIn} />
        <AppButton
          title="Register"
          onPress={() => navigation.replace("SignUp")}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {},
});
export default LoginScreen;