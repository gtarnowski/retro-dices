import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FONT_WORKSANS_THIN } from "../lib/constants";

const Dices = ({ dices, dots, result, onThrowSingleDice }) => (
  <View style={{ flex: 4 }}>
    <View style={container}>
      {dices.map((dice, key) => (
        <TouchableHighlight onPress={() => onThrowSingleDice(key)} key={key}>
          <View style={diceBox}>
            <Text style={item}>
              {result.length ? result[key] : dots}
            </Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  </View>
);

const { container, diceBox, item } = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
    diceBox: {
    margin: 5,
    height: 80,
    width: 80,
    backgroundColor: "#263238"
  },
  item: {
    fontFamily: FONT_WORKSANS_THIN,
    color: "white",
    fontSize: 35,
    top: "22%",
    textAlign: "center"
  }
});

export default Dices;
