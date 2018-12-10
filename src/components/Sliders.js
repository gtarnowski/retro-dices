import React from "react";
import { FONT_WORKSANS_MEDIUM, TYPE_DICES, TYPE_DOTS } from "../lib/constants";
import { Slider, Text, StyleSheet, View } from "react-native";

const thumbTintColor = "#fff";
const minimumTrackTintColor = "#888";
const maximumTrackTintColor = "#999";
const slidersData = [
  {
    name: "Dots",
    maximumValue: 17,
    minimumValue: 6,
    step: 1,
    type: TYPE_DOTS
  },
  {
    name: "Dices",
    maximumValue: 6,
    minimumValue: 1,
    step: 1,
    type: TYPE_DICES
  }
];

const Sliders = ({ onValueChange, values }) => {
  return (
    <View style={container}>
      {slidersData.map(slider => (
        <View key={slider.name} style={slidersContainer}>
          <Text style={sliderText}>
            {slider.name}: {values[slider.name.toLowerCase()]}
          </Text>
          <Slider
            {...slider}
            onValueChange={step => onValueChange(step, slider.type)}
            value={values[slider.type]}
            thumbTintColor={thumbTintColor}
            minimumTrackTintColor={minimumTrackTintColor}
            maximumTrackTintColor={maximumTrackTintColor}
            style={sliders}
          />
        </View>
      ))}
    </View>
  );
};

const { container, slidersContainer, sliders, sliderText } = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: "center"
  },
  slidersContainer: {
    marginTop: 15
  },
  sliders: {
    marginTop: 16
  },
  sliderText: {
    color: "white",
    fontSize: 20,
    marginLeft: 12,
    fontFamily: FONT_WORKSANS_MEDIUM
  }
});

export default Sliders;
