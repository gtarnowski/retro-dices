import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import HomeScreen from "./src/components/HomeScreen";

export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#42275a", "#734b6d"]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%"
        }}
      >
        <View style={styles.container}>
          <HomeScreen />
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 24,
    paddingVertical: 24,
  }
});
