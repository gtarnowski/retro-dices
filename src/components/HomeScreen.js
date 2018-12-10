import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { FONT_MONTSERRAT_EXTRA_BOLD } from "../lib/constants";
import CustomButton from "./CustomButton";

const HomeScreen = ({ navigation: { navigate } }) => (
  <View style={container}>
    <View style={nameContainer}>
      <Text style={text}>FLAT</Text>
      <Text style={textSmall}>DICES</Text>
    </View>
    <View style={buttonContainer}>
      <CustomButton onPress={() => navigate("Board")} text="START" />
    </View>
  </View>
);

const {
  container,
  nameContainer,
  text,
  textSmall,
  buttonContainer
} = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
  nameContainer: {
    marginVertical: 24,
    flex: 3,
    justifyContent: "flex-end"
  },
  text: {
    fontFamily: FONT_MONTSERRAT_EXTRA_BOLD,
    fontSize: 80,
    color: "white",
    alignSelf: "center"
  },
  textSmall: {
    alignSelf: "center",
    fontFamily: "WorkSans-Thin",
    fontSize: 36,
    letterSpacing: 27,
    color: "white"
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "flex-end",
    marginHorizontal: 24,
    marginBottom: 50
  }
});

export default HomeScreen;
