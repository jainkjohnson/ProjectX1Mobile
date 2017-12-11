import React, { PropTypes } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { toggleDrawer } from 'app/redux/app.js';
import SideDrawer from 'app/components/SideDrawer/SideDrawer';
import NavBar from 'app/components/NavBar/NavBar';
import Card from 'app/components/Card/Card';
import { sample } from 'app/lib/mokeData';
import styles from './styles.js';

const { object, func } = PropTypes;

class App extends React.Component {
  static propTypes = {
    navigation: object,
    toggleDrawer: func
  }
  componentDidMount() {
  }
  renderCards = () => {
    const { data: mokeData } = sample;

    return Object.keys(mokeData).map((item, key) => (
      <Card data={mokeData[item]} date={item} key={key} />
    ));
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <NavBar leftButton="bars" titleText="To Do" leftButtonPress={() => this.props.toggleDrawer()} />

        <SideDrawer navigate={navigate} className={styles.sideDrawer} />
      </View>
    );
  }
}

export default connect(() => ({
}), {
  toggleDrawer
})(App);
