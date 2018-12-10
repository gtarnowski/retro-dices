import React from "react";
import CustomButton from "./CustomButton";

const ThrowButton = ({ onPress, dices }) => (
  <CustomButton text={dices === 1 ? 'THROW' : 'THROW ALL'} onPress={onPress} />
);

export default ThrowButton;
