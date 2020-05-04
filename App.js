import React from "react";
import SignUp from "./src/SignUp";
import Login from './src/Login'

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const App = createStackNavigator(
  {
    SignUp: { screen: SignUp },
    Login: {screen:Login}
  },
  {
    initialRouteName: "Login"
  }
);

export default createAppContainer(App);
