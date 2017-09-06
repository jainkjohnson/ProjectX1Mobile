import { StackNavigator } from 'react-navigation';
import HomeScreen from './containers/Home/Home';
import Screen1 from './containers/';

const Routes = {
  Screen1: {
    name: 'Screen1',
    screen: Screen1,
    label: 'SCREEN',
    icon: 'building'
  },
  HomeScreen: {
    name: 'HomeScreen',
    screen: HomeScreen,
    label: 'HOME',
    icon: 'book'
  }
};

const SimpleApp = StackNavigator(
  {
    ...Routes
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
  }
);

export { Routes };
module.exports = { SimpleApp };

