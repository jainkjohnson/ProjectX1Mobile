import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    height: height * 0.13,
    flexDirection: 'row',
    marginBottom: 3,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    margin: 10
  },
  sideLineContainer: {
    flex: 0.02,
  },
  dateContainer: {
    flex: 0.2,
    backgroundColor: '#0288D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    flex: 0.78,
    backgroundColor: '#B3E5FC',
  },
  date: {
    fontSize: 22,
    padding: 5,
    fontWeight: '600',
  },
  time: {
    fontSize: 14,
    fontWeight: '500',
  },
  day: {
    fontSize: 14,
  },
  content: {
    fontSize: 13,
    padding: 5,
  }
});

module.exports = styles;
