import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { DatabaseConnection } from "../Database/Database";
// import BottomTab from "./BottomTab";

const db = DatabaseConnection.getConnection();

const RegisterCourier = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userDelivery, setUserDelivery] = useState("");

  const register_courier = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        "INSERT INTO table_user2(user_name, user_address, user_delivery)VALUES(?,?,?)",
        [userName, userAddress, userDelivery],
        (tx, results) => {
          console.log("User registered.");
          navigation.navigate("MainPage");
        }
      );
    });
  };

  return (
    <View>
      <Text>Register Courier here: </Text>

      <AppTextInput
        placeholder="Courier Reciver"
        value={userName}
        onChangeText={(value) => setUserName(value)}
      />

      <AppTextInput
        placeholder="Pick up address"
        value={userAddress}
        onChangeText={(value) => setUserAddress(value)}
      />

      <AppTextInput
        placeholder="Drop off address"
        value={userDelivery}
        onChangeText={(value) => setUserDelivery(value)}
      />

      <AppButton title="Register" onPress={register_courier} />
    </View>
  );
};

export default RegisterCourier;

const styles = StyleSheet.create({});
