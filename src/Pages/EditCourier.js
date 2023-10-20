import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";

import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { DatabaseConnection } from "../Database/Database";
import { useNavigation } from "@react-navigation/native";

const db = DatabaseConnection.getConnection();

const EditCourier = (props) => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userDelivery, setUserDelivery] = useState("");
  const [userId, setUserId] = useState(props.route.params.user_id);

  

  useEffect(() => {
    setUserId(props.route.params.user_id);
    setUserName(props.route.params.user_name);
    setUserAddress(props.route.params.user_address);
    setUserDelivery(props.route.params.user_delivery);
  }, []);

  const updateCourier = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE table_user2 set user_name=?, user_address=?, user_delivery=? where user_id=?",
        [userName, userAddress, userDelivery, userId],
        (tx, results) => {
          console.log("User updated.");
          navigation.navigate("Home");
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 15,
          padding: 15,
          backgroundColor: "lightblue",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>Courier Number: {userId}</Text>
        <TextInput
          placeholder="Courier for:"
          value={userName}
          onChangeText={(value) => setUserName(value)}
        />
        <TextInput
          placeholder="Pick Up"
          value={userAddress}
          onChangeText={(value) => setUserAddress(value)}
        />
        <TextInput
          placeholder="Delivery Address"
          value={userDelivery}
          onChangeText={(value) => setUserDelivery(value)}
        />

        <Button title="Update Courier" onPress={updateCourier} />
      </View>
    </View>
  );
};

export default EditCourier;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
  },
});
