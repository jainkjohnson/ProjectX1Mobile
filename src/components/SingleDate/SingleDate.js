import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
import { dateConvertor } from 'app/helpers/dateConvertor';
import styles from './styles';

const { number, object } = PropTypes;

export default class SingleDate extends Component {
  static propTypes = {
    date: number,
  }
  
  componentDidMount() {
  }

  popUpMenu = () => {

  }

  render() {
    const dateArray = dateConvertor(this.props.date);
    const sideLineColor = { HAPPY: '#4CAF50', SAD: '#E64A19', NORMAL: '#FFC107' };

    return (
      <View style={styles.rootContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.dateAndDayContainer}>
            <View>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>{dateArray[0]}</Text>  
              </View>
              <View style={styles.dayContainer}>
                <Text style={styles.day}>{dateArray[3]}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.iconContainer} onPress={this.popUpMenu}>
            <Icon name="heart" size={20} color="#C2185B" />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.time}>{dateArray[4]}</Text>
          </View>
          <View>
            <Text style={styles.data}>
              Helloooo....
              How are u
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
