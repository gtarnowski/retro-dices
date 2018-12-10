import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { FONT_MONTSERRAT_EXTRA_BOLD } from "../lib/constants";

const CustomButton = ({
  onPress,
  text,
  fontFamily = FONT_MONTSERRAT_EXTRA_BOLD
}) => (
  <TouchableHighlight onPress={onPress}>
    <View style={{ padding: 8 }}>
      <Text
        style={{
          color: "white",
          fontSize: 30,
          alignSelf: "center",
          fontFamily
        }}
      >
        {text}
      </Text>
    </View>
  </TouchableHighlight>
);

export default CustomButton;
