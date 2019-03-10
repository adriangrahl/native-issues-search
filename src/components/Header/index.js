import React, { Component } from "react";

import { View, Text, StatusBar } from "react-native";
import styles from "./styles";
import { colors } from "~/styles";

export default class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }
}
