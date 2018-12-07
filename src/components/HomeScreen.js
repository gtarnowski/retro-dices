import React, { Component, Fragment } from "react";
import { View, Text, Slider, StyleSheet, Button } from "react-native";
import Dices from "./Dices";

const thumbTintColor = "#fff";
const minimumTrackTintColor = "#888";
const maximumTrackTintColor = "#999";

const TYPE_DOTS = "dots";
const TYPE_DICES = "dices";

class HomeScreen extends Component {
  state = {
    dices: 3,
    dots: 6,
    result: []
  };
  onValueChange = (step, type) => {
    console.log(step, type);
    this.setState({ [type]: step, result: [] });
  };

  onPress = () => {
    const { dices, dots } = this.state;
    const result = Array.from({ length: dices }, () =>
      Math.floor(Math.random() * (dots - 1 + 1) + 1)
    );
    this.setState({ result });
  };

  sliders = [
    {
      name: "Dots",
      onValueChange: step => this.onValueChange(step, TYPE_DOTS),
      maximumValue: 17,
      minimumValue: 6,
      step: 1,
      type: TYPE_DOTS
    },
    {
      name: "Dices",
      onValueChange: step => this.onValueChange(step, TYPE_DICES),
      maximumValue: 6,
      minimumValue: 1,
      step: 1,
      type: TYPE_DICES
    }
  ];

  getTotalThrowValue = () => {
    const { result, dots, dices } = this.state;
    if (!result.length) {
      return dots * dices;
    }

    return result.reduce((a, b) => a + b, 0);
  };

  getDicesQuantity = () => new Array(this.state.dices).fill(1);

  render() {
    const { dots, result } = this.state;
    return (
      <View styles={styles.container}>
        <View style={styles.slidersContainer}>
          {this.sliders.map(slider => (
            <Fragment key={slider.name}>
              <Text>
                {slider.name} | {this.state[slider.name.toLowerCase()]}
              </Text>
              <Slider
                {...slider}
                value={this.state[slider.type]}
                thumbTintColor={thumbTintColor}
                minimumTrackTintColor={minimumTrackTintColor}
                maximumTrackTintColor={maximumTrackTintColor}
                style={styles.sliders}
              />
            </Fragment>
          ))}
        </View>
        <View>
          <Text>TOTAL VALUE | {this.getTotalThrowValue()}</Text>
        </View>
        <View styles={styles.buttonContainer}>
          <Button title="Throw" onPress={this.onPress} style={styles.button} />
        </View>
        <Dices dices={this.getDicesQuantity()} dots={dots} result={result} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-end"
  },
  slidersContainer: {
    marginTop: 100
  },
  sliders: {
    width: "100%",
    marginTop: 16
  },
  buttonContainer: {
    flex: 1
  },
  button: {
    alignSelf: "flex-end"
  }
});

export default HomeScreen;
