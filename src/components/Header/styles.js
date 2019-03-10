import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 34 + getStatusBarHeight(),
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.darker
  }
});

export default styles;
