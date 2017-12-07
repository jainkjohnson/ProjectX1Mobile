import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { dateConvertor } from 'app/helpers/dateConvertor';
import styles from './styles';

const { string } = PropTypes;

export default class Card extends Component {
  static propTypes = {
    date: string
  }
  componentDidMount() {
  }
  render() {
    const dateArray = dateConvertor(this.props.date);
    const sideLineColor = ['#4CAF50', '#E64A19', '#FFC107'];

    return (
      <View style={styles.rootContainer}>
        <View style={[styles.sideLineContainer, { backgroundColor: sideLineColor[Math.floor(Math.random() * sideLineColor.length)] }]} />
        <View style={styles.dateContainer}>
          <Text style={styles.time}>{dateArray[4]}</Text>
          <Text style={styles.date}>{dateArray[0]}</Text>
          <Text style={styles.day}>{dateArray[3]}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.content}>content</Text>
        </View>
      </View>
    );
  }
}
