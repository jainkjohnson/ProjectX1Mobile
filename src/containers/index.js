import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleDrawer } from 'app/redux/app.js';
import SideDrawer from 'app/components/SideDrawer/SideDrawer';
import NavBar from 'app/components/NavBar/NavBar';

const { object, func } = PropTypes;

class App extends React.Component {
  static propTypes = {
    navigation: object,
    toggleDrawer: func
  }
  componentDidMount() {
  }
  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <NavBar leftButton="bars" titleText="To Do" leftButtonPress={() => this.props.toggleDrawer()} />
        <SideDrawer navigate={navigate} />
      </View>
    );
  }
}

export default connect((state) => ({
  showDrawer: state
}), {
  toggleDrawer
})(App);
