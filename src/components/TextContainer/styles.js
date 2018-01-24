import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'white',
    height: height * 0.07,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  multiLineRootContainer: {
    backgroundColor: 'white',
    height: height * 0.55,
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
    height: height * 0.06,
    width: width - 50,
    marginTop: 5,
    flex: 0.9,
  },
  textMultiLineContainer: {
    height: height * 0.5,
    width: width - 30,
    fontSize: 14,
    backgroundColor: 'white'
  },
});

module.exports = styles;
