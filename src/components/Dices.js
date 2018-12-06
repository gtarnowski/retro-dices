import React from 'react';
import { View, Text, Slider, StyleSheet } from "react-native";

const Dices = ({ dices }) => {
  console.log('DICES', dices)
  return (
    <View>
      {dices.map((dice, key) => (
        <View key={key} style={styles.dice}>
          <Text>{dices.length}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  dice: {
    height: 100,
    width: 100,
    backgroundColor: 'white'
  }
})

export default Dices
