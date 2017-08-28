import { StyleSheet, Dimensions } from 'react-native';
import { colorCodes } from 'app/theme';

const { height, width } = Dimensions.get('window');
const imageSize = 60;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  hidden: {
    height: 0,
    opacity: 0
  },
  container: {
    position: 'absolute',
    backgroundColor: colorCodes.appTheme,
    width: width * 0.2,
    height,
    alignItems: 'center'
  },
  userImageContainer: {
    height: 100,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderTopWidth: 1,
    borderColor: colorCodes.sideDrawerBorder,
  },
  profilePic: {
    height: imageSize,
    width: imageSize,
    borderRadius: imageSize,
  },
  iconContainer: {
    height: 70,
    width: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colorCodes.sideDrawerBorder,
    borderTopWidth: 1,
  },
  freeSpace: {
    position: 'absolute',
    width: width * 0.8,
    height,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginLeft: width * 0.2
  }
});

module.exports = styles;
