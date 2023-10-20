import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

import { DatabaseConnection } from "../Database/Database";
import AppButton from "../components/AppButton";
// import BottomTab from "./src/Pages/BottomTab";
const db = DatabaseConnection.getConnection();

const UserScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (tx) {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS table_user2(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_address VARCHAR(255), user_delivery VARCHAR(250))",
        [],
        (tx, results) => {}
      );
    });
  }, []);
  return (
    <View>
      <Text>Manage your courier here:</Text>
      <AppButton
        title="Register Courier"
        onPress={() => navigation.navigate("Register")}
      />
      <AppButton
        title="View Courier"
        onPress={() => navigation.navigate("View")}
      />
      {/* <AppButton
        title="Edit Courier"
        onPress={() => navigation.navigate("Edit")}
      /> */}
      <AppButton
        title="Delete Courier"
        onPress={() => navigation.navigate("Delete")}
      />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
