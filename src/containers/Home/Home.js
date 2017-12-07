import React, { Component, PropTypes } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { toggleDrawer } from 'app/redux/app.js';
import SideDrawer from 'app/components/SideDrawer/SideDrawer';
import NavBar from 'app/components/NavBar/NavBar';
import Card from 'app/components/Card/Card';
import { sample } from 'app/lib/mokeData';
import styles from './styles.js';

const { object, func } = PropTypes;

class App extends Component {
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
        <NavBar leftButton="bars" titleText="Diary" leftButtonPress={() => this.props.toggleDrawer()} />
        <ScrollView style={styles.scrollStyle}>
        {
          this.renderCards()
        }
        </ScrollView>
        <TouchableOpacity style={styles.addDiary}>
          <Icon name="plus" size={17} color="#FFF" />
        </TouchableOpacity>
        <SideDrawer navigate={navigate} className={styles.sideDrawer} />
      </View>
    );
  }
}

export default connect(() => ({
}), {
  toggleDrawer
})(App);
