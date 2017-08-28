import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const { string, func } = PropTypes;

export default class NavBar extends Component {
  static propTypes = {
    leftButton: string,
    rightButton: string,
    leftButtonPress: func,
    rightButtonPress: func,
    titleText: string
  }
  render() {
    const { leftButton, rightButton, leftButtonPress, rightButtonPress, titleText } = this.props;

    return (
      <View style={styles.rootContainer}>
        <View style={styles.subContainer}>
          {
            leftButton
            ?
            <TouchableOpacity
              style={styles.leftButton}
              onPress={leftButtonPress}
            >
              <Icon name={leftButton} size={20} color="#ffffff" />
            </TouchableOpacity>
            :
              null
            }
          <View style={styles.title}>
            <Text style={styles.titleText}>{titleText}</Text>
          </View>
            {
              rightButton
              ?
                <TouchableOpacity
                  style={styles.rightButton}
                  onPress={rightButtonPress}
                >
                  <Icon name={rightButton} size={20} color="#ffffff" />
                </TouchableOpacity>
              :
                null
            }
        </View>
      </View>
    );
  }
}
