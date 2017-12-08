import React, { Component, PropTypes } from 'react';
import { colorCodes } from 'app/theme';
import {
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const { object, func } = PropTypes;

export default class TextContainer extends Component {

  static propTypes = {
    onInputChange: func,
    className: object,
  }

  render() {
    const { className } = this.props;

    return (
      <View style={[styles.rootContainer, className]}>
        <View style={styles.iconContainer}>
          <Icon name="calendar" size={23} color={colorCodes.iconColor} />
        </View>
        <TextInput
          style={styles.textContainer}
          onChangeText={this.props.onInputChange}
        />
      </View>
    );
  }
}
