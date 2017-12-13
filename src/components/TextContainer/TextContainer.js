import React, { Component, PropTypes } from 'react';
import { colorCodes } from 'app/theme';
import {
  View,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const { number, func, string } = PropTypes;

/**
 * Class representing text container
 *
 * @property {string} icon - text input icon
 * @property {number} className - for define style
 * @property {func} onInputChange - get data from text input
 */

export default class TextContainer extends Component {

  static propTypes = {
    onInputChange: func,
    className: number,
    icon: string,
  }

  render() {
    const { className, icon, multiline, numberOfLines } = this.props;

    return (
      <View style={multiline ? [styles.multiLineRootContainer, className] : [styles.rootContainer, className]}>
        {
          multiline ? null :
          <View style={styles.iconContainer}>
            <Icon name={icon} size={23} color={colorCodes.iconColor} />
          </View>
        }
        <TextInput
          style={multiline ? styles.textMultiLineContainer : styles.textContainer}
          onChangeText={this.props.onInputChange}
          multiline={this.props.multiline}
          numberOfLines={this.props.numberOfLines}
        />
      </View>
    );
  }
}
