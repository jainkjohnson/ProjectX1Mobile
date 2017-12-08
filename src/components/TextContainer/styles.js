import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  iconContainer: {
    padding: 5,
    flex: 0.1,
    alignItems: 'center'
  },
  textContainer: {
    height: 40,
    width: width - 50,
    marginTop: 5,
    flex: 0.9,
  }
});

module.exports = styles;
