import React, { Component, Fragment } from "react";
import { View, Text, Slider, StyleSheet } from "react-native";
import Dices from './Dices'

const thumbTintColor = "#fff";
const minimumTrackTintColor = "#888";
const maximumTrackTintColor = "#999";

const TYPE_DOTS = "dots";
const TYPE_DICES = "dices";

class HomeScreen extends Component {
  state = {
    dices: 3,
    dots: 6
  };
  onValueChange = (step, type) => {
    console.log(step, type);
    if (type === TYPE_DOTS) {
    }
  };

  onSlidingComplete = () => {};

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

  render() {
    return (
      <View>
        <View style={styles.dicesContainer}>
          {this.sliders.map(slider => (
            <Fragment key={slider.name}>
              <Text>{slider.name}</Text>
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
          <Dices dices={new Array(this.state.dices).fill(1)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dicesContainer: {
    marginTop: 100
  },
  sliders: {
    width: "100%",
    marginTop: 16
  }
});

export default HomeScreen;
