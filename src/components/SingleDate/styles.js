import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  rootContainer: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#4CAF50',
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative'
  },
  iconContainer: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  dateAndDayContainer: {
    flex: 0.9
  },
  dateContainer: {
    alignItems: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
    width: width - 100,
  },
  dayContainer: {
    alignItems: 'center',
  },
  date: {
    fontSize: 18
  },
  day: {
    fontSize: 18
  },
  time: {
    fontSize: 14,
    padding: 5,
    marginLeft: 3,
  },
  data: {
    fontSize: 14,
    padding: 5,
    paddingBottom: 10,
    flexWrap: 'wrap',
  },
  popUpContainer: {
    width: 30,
    height: 30,
    backgroundColor: 'black',
    position: 'absolute',
    right: 10,
    top: 10
  }
});

module.exports = styles;