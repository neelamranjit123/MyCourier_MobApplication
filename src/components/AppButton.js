import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";



function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.button]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color:'white',
    fontSize: 22,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
