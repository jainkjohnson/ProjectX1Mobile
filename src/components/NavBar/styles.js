import { StyleSheet, Dimensions } from 'react-native';
import { colorCodes } from 'app/theme';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    shadowOffset: { width: 0, height: 10 },
    shadowColor: '#514364',
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  subContainer: {
    flexDirection: 'row',
    height: 0.08 * height,
    backgroundColor: colorCodes.appTheme
  },
  leftButton: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 0.8,
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 20,
    paddingLeft: 10,
    color: '#ffffff',
    textAlign: 'left'
  },
  rightButton: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

module.exports = styles;
