import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { dateConvertor } from 'app/helpers/dateConvertor';
import styles from './styles';

const { number, object } = PropTypes;

export default class Card extends Component {
  static propTypes = {
    date: number,
    data: object,
  }
  componentDidMount() {
  }
  render() {
    const dateArray = dateConvertor(this.props.date);
    const sideLineColor = { HAPPY: '#4CAF50', SAD: '#E64A19', NORMAL: '#FFC107' };
    const { data } = this.props;

    return (
      <View style={styles.rootContainer}>
        <View style={[styles.sideLineContainer, { backgroundColor: sideLineColor[data.status] }]} />
        <View style={styles.dateContainer}>
          <Text style={styles.time}>{dateArray[4]}</Text>
          <Text style={styles.date}>{dateArray[0]}</Text>
          <Text style={styles.day}>{dateArray[3]}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.content}>{data.content}</Text>
        </View>
      </View>
    );
  }
}
