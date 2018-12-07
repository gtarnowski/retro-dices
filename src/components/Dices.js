import React, { Component } from "react";
import { View, Text, Slider, StyleSheet } from "react-native";

const Dices = ({ dices, dots, result }) => {
  console.log(result)
  return (
    <View style={styles.container}>
      {dices.map((dice, key) => (
        <View key={key} style={styles.dice}>
          <Text style={styles.item}>
            {result.length ? result[key] : dots}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  dice: {
    margin: 5,
    height: 80,
    width: 80,
    backgroundColor: "white"
  },
  item: {
    top: "42%",
    textAlign: "center"
  }
});

export default Dices;
