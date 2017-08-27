import React from 'react';
import {
  View,
} from 'react-native';
import SideDrawer from '../components/SideDrawer/SideDrawer';

export default class App extends React.Component {
  componentDidMount() {
  }
  render() {
    console.log('side');

    return (
      <View>
        <SideDrawer />
      </View>
    );
  }
}
