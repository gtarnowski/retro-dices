import React, { Component } from "react";
import { View } from "react-native";
import debounce from "lodash.throttle";
import {
  getDicesQuantity,
  getTotalThrowValue,
  getThrowDice
} from "../lib/helpers";
import Dices from "./Dices";
import Sliders from "./Sliders";
import ThrowButton from "./ThrowButton";
import Summary from "./Summary";

class Board extends Component {
  state = {
    dices: 5,
    dots: 6,
    result: [6, 6, 6, 6, 6],
    disabled: false
  };

  onValueChange = (step, type) => this.setState({ [type]: step, result: [] });

  onPress = debounce(() => {
    const { dices, dots } = this.state;
    const result = getThrowDice(dices, dots);
    this.setState({ result, disabled: true });
    setTimeout(() => this.setState({ disabled: false }), 700);
  }, 700);

  onThrowSingleDice = diceIndex => {
    const { result, dots, disabled } = this.state;
    if (disabled) return;

    const { 0: singleThrowResult } = getThrowDice(1, dots);
    result[diceIndex] = singleThrowResult;
    this.setState({ result });
  };

  render() {
    const { dices, dots, result, disabled } = this.state;
    return (
      <View style={{ flex: 1, padding: 24 }}>
        <Sliders onValueChange={this.onValueChange} values={this.state} />
        <ThrowButton onPress={this.onPress} disabled={disabled} dices={dices} />
        <Summary value={getTotalThrowValue(dices, dots, result)} />
        <Dices
          dices={getDicesQuantity(dices)}
          dots={dots}
          result={result}
          onThrowSingleDice={this.onThrowSingleDice}
        />
      </View>
    );
  }
}

export default Board;
