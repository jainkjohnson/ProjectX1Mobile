import React, { Component, PropTypes } from 'react';
import {
  View,
  FlatList,
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

  addDiary = () => {
    const { navigate } = this.props.navigation;

    navigate('AddDiary');
  }

  keyExtractor = (item) => item.id;

  renderCards = ({ item }) => (
    <Card data={item} date={item.time} key={item} />
  );

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <NavBar leftButton="bars" titleText="Diary" leftButtonPress={() => this.props.toggleDrawer()} />
        {/* <ScrollView style={styles.scrollStyle}>
        {
          this.renderCards()
        }
        </ScrollView> */}
        <FlatList
          data={sample}
          renderItem={this.renderCards}
          style={styles.scrollStyle}
          keyExtractor={this.keyExtractor}
        />
        <TouchableOpacity style={styles.addDiary} onPress={this.addDiary}>
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
