import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import Board from "./components/Board";

const AppNavigator = createSwitchNavigator({
    Home: HomeScreen,
    Board: Board
});

export default createAppContainer(AppNavigator)
