import { StyleSheet, Dimensions } from 'react-native';
import { colorCodes } from 'app/theme';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  rootContainer: {
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorCodes.appTheme,
    borderRadius: 25
  },
  buttonLabel: {
    color: 'white',
    fontSize: 16,
  }
});

module.exports = styles;
