import React, { useEffect, useState } from "react";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";

import { TextInput, View, Text } from "react-native";
import firebase from "firebase";

function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Signup");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    console.log(email)
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //storing data to firestore database
        console.log(`Registered with: ${user.email}`);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <View>
      <Text>Register Screen</Text>
      <AppTextInput
        placeholder="Email"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <AppTextInput
        placeholder="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
      />

      {/* <Text>Register Screen</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(value) => setPassword(value)}
      /> */}

      <AppButton title="Sign Up" onPress={handleSignUp} />
      <AppButton title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

export default SignUpScreen;
