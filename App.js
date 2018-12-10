import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { LinearGradient, Font } from "expo";
import AppContainer from "./src/Navigation";

export default class App extends React.Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "WorkSans-Thin": require("./assets/fonts/WorkSans-Thin.ttf"),
      "WorkSans-Medium": require("./assets/fonts/WorkSans-Medium.ttf"),
      "Montserrat-Extra-Bold": require("./assets/fonts/Montserrat-ExtraBold.ttf")
    });

    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.fontLoaded && <AppContainer />}
      </View>
    );

    return (
      <View style={styles.container}>
        <ImageBackground
          style={{
            height: "100%",
            width: "100%"
          }}
          source={require("./assets/background.jpg")}
        >
          {this.state.fontLoaded && <AppContainer />}
        </ImageBackground>
      </View>
    );

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
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111"
  }
});
