import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Routes } from 'app/routes.js';
import { toggleDrawer } from 'app/redux/app.js';
import styles from './styles.js';

const { bool, func, number } = PropTypes;

class SideDrawer extends Component {
  static propTypes = {
    navigate: func,
    showDrawer: bool,
    toggleDrawer: func,
    className: number,
  }

  componentDidMount() {
  }

  onHandleClick = (value) => () => {
    const { navigate, toggleDrawer: drawer } = this.props;

    navigate(value);
    drawer();
  }

  renderMenu = () => (
    Object.keys(Routes).map((item, index) => (
      <TouchableOpacity
        key={index}
        style={styles.iconContainer}
        onPress={this.onHandleClick(Routes[item].name)}
      >
        <Icon name={Routes[item].icon} size={23} color="#FFF" />
      </TouchableOpacity>
    ))
  )

  render() {
    return (
      <View style={[this.props.className, styles.rootContainer]}>
        <View style={this.props.showDrawer ? styles.container : styles.hidden}>
          <View style={styles.userImageContainer}>
            <Image
              source={require('../../images/profile.jpg')} // eslint-disable-line
              style={styles.profilePic}
            />
          </View>
          {
            this.renderMenu()
          }
        </View>
        <TouchableWithoutFeedback onPress={this.props.toggleDrawer} style={this.props.showDrawer ? styles.freeSpace : styles.hidden}>
        <View style={this.props.showDrawer ? styles.freeSpace : styles.hidden} />
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

export default connect((state) => ({
  showDrawer: state.app.showDrawer
}), {
  toggleDrawer
})(SideDrawer);
