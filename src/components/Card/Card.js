import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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

    console.log(dateArray);

    return (
      <View style={styles.rootContainer}>
        <View style={styles.sideLineContainer} />
        <View style={styles.dateContainer}>
          <Text>{dateArray[0]}</Text>
          <Text>{dateArray[3]}</Text>
          <Text>{dateArray[4]}</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text>content</Text>
        </View>
      </View>
    );
  }
}
