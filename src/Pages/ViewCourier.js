import { StyleSheet, Text, View, FlatList, ScrollView, Button } from "react-native";
import React, { useState, useEffect } from "react";

import { DatabaseConnection } from "../Database/Database";
import BottomTab from "./BottomTab";

const db = DatabaseConnection.getConnection();

const ViewCourier = ({navigation}) => {
  const [flatListitems, setFlatListItems] = useState([]);

  useEffect(() => {
    db.transaction(function (tx) {
      tx.executeSql("SELECT * FROM table_user2", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; i++) {
          temp.push(results.rows.item(i));
        }
        setFlatListItems(temp);
      });
    });
  }, []);

  const listViewItems = (item) => {
    return (
      
      <ScrollView>
        
        <View
          style={{
            borderRadius: 10,
            marginHorizontal: 10,
            marginVertical: 15,
            padding: 15,
            backgroundColor: "lightblue",
            
          }}
        >
          <Text style={{ fontWeight: "bold" }}>
            Courier Number: {item.user_id}
          </Text>
          <Text>Courier for: {item.user_name}</Text>
          <Text>Pick up Address: {item.user_address}</Text>
          <Text>Delivery Address: {item.user_delivery}</Text>
          <Button title="Update" onPress={() => navigation.navigate('Edit', id=item.user_id)}/>
        </View>
      </ScrollView>
    );
  };

  return (
    <View>
      <Text> List of your couriers:</Text>
      <FlatList
        data={flatListitems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>  
        <View
        style={{
          borderRadius: 10,
          marginHorizontal: 10,
          marginVertical: 15,
          padding: 15,
          backgroundColor: "lightblue",
          
        }}
      >
        <Text style={{ fontWeight: "bold" }}>
          Courier Number: {item.user_id}
        </Text>
        <Text>Courier for: {item.user_name}</Text>
        <Text>Pick up Address: {item.user_address}</Text>
        <Text>Delivery Address: {item.user_delivery}</Text>
        <Button title="Update" onPress={() => navigation.navigate('Edit', item=item)}/>
      </View>}
        
      />
    </View>
  );
};

export default ViewCourier;

const styles = StyleSheet.create({});
