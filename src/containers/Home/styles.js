import { StyleSheet, Dimensions } from 'react-native';
import { colorCodes } from 'app/theme';

const { height } = Dimensions.get('window');
const addDiaryIconSize = 60;

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: colorCodes.appBackground,
  },
  sideDrawer: {
    position: 'absolute'
  },
  scrollStyle: {
    height: 0.92 * height,
  },
  calenderContainer: {
    backgroundColor: 'white',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.0,
    marginTop: 10, 
  },
  addDiary: {
    alignItems: 'center',
    justifyContent: 'center',
    height: addDiaryIconSize,
    width: addDiaryIconSize,
    borderRadius: addDiaryIconSize / 2,
    backgroundColor: '#E91E63',
    position: 'absolute',
    bottom: 30,
    right: 30,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.7,
  }
});

module.exports = styles;

