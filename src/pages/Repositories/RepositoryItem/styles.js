import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding / 2,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },

  image: {
    height: 48,
    width: 48
  },

  info: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: metrics.baseMargin,
  },

  infoRepo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },

  infoOrg: {
    color: colors.dark,
    fontSize: 14,
  },

  icon: {
    marginLeft: metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin * 2
  },
});

export default styles;
