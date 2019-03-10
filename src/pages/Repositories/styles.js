import { StyleSheet } from "react-native";

import { colors, metrics } from "~/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter
  },

  formSearch: {
    flexDirection: "row",
    margin: metrics.baseMargin * 2,
    borderBottomWidth: 1,
    paddingBottom: metrics.basePadding,
    borderColor: colors.light
  },

  input: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 35,
    paddingHorizontal: metrics.basePadding
  },

  icon: {
    marginTop: metrics.baseMargin,
    marginLeft: metrics.baseMargin * 2,
    justifyContent: "center",
    alignItems: "center",
    color: colors.black
  }
});

export default styles;
