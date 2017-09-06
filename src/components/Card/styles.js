import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    height: height * 0.13,
    flexDirection: 'row',
    margin: 10,
    marginBottom: 0,
  },
  sideLineContainer: {
    flex: 0.02,
    backgroundColor: 'green'
  },
  dateContainer: {
    flex: 0.2,
    backgroundColor: 'blue',
  },
  contentContainer: {
    flex: 0.78,
    backgroundColor: 'red',
  }
});

module.exports = styles;
