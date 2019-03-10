import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import "~/config/reactotron";
import "~/config/devtools";

import CreateNavigator from "./routes";

export default class App extends Component {
  render() {
    const Routes = CreateNavigator();
    return <Routes />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
