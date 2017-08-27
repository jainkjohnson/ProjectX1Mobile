import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const imageSize = 60;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    backgroundColor: '#295a84',
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
    borderBottomWidth: 0.5,
    borderColor: '#FFFFFF'
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
    borderColor: '#FFFFFF',
    borderBottomWidth: 0.5,
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
