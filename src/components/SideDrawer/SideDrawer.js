import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Routes } from '../../routes.js';
import styles from './styles.js';

export default class SideDrawer extends Component {
  componentDidMount() {
  }

  renderMenu = () => (
    Object.keys(Routes).map((item, index) => (
      <View key={index} style={styles.iconContainer}>
        <Icon name={Routes[item].icon} size={23} color="#FFF" />
      </View>
    ))
  )

  render() {
    return (
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <View style={styles.userImageContainer}>
            <Image
              source={require('../../images/profile.jpg')}
              style={styles.profilePic}
            />
          </View>
          {
            this.renderMenu()
          }
        </View>
        <View style={styles.freeSpace} />
      </View>
    );
  }
}
