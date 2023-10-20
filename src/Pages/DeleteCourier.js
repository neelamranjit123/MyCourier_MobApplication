import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { DatabaseConnection } from "../Database/Database";

const db = DatabaseConnection.getConnection();

const DeleteCourier = ({ navigation }) => {
  const [user_id, setUserId] = useState("");

  const delete_courier = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        "DELETE FROM table_user2 where user_id=?",
        [user_id],
        (tx, results) => {
          console.log("User deleted.");
          navigation.navigate("Home");
        }
      );
    });
  };

  return (
    <View style = {styles.container}>
      <Text> Cancel your courier here: </Text>
      <AppTextInput
        placeholder="Enter your Courier number"
        value={user_id}
        onChangeText={(user_id) => setUserId(user_id)}
      />

      <AppButton title="Delete Courier" onPress={delete_courier} />
    </View>
  );
};

export default DeleteCourier;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
}});
