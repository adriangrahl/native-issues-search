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

  avatar: {
    height: 48,
    width: 48,
    borderRadius: 50,
  },

  info: {
    justifyContent: 'center',
    flex: 1,
    marginLeft: metrics.baseMargin,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
  },

  user: {
    color: colors.dark,
    fontSize: 14,
  },

  icon: {
    marginLeft: metrics.baseMargin,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
