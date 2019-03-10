import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },

  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.light,
    color: colors.darker,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 3,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },

  option: {
    color: colors.regular,
  },

  optionSelected: {
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default styles;
