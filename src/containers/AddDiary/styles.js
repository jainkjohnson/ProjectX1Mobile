import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');
const addMoodIcon = height * 0.06;

const styles = StyleSheet.create({
  textContainer: {
    margin: 5
  },
  addDiary: {
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: addMoodIcon,
    width: addMoodIcon,
    borderRadius: addMoodIcon / 2,
    backgroundColor: '#4CAF50',
    shadowOffset: { width: 2, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.7,
  },
  block: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  }
});

module.exports = styles;
