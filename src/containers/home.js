import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

const { object } = PropTypes;

export default class App extends Component {
  static propTypes = {
    navigation: object
  }
  componentDidMount() {
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text>Home....</Text>
        <Button
          onPress={() => navigate('Screen1')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
