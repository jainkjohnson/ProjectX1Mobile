import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const { number, func, string } = PropTypes;

/**
 * Class representing button container
 *
 * @property {string} label - text label
 * @property {number} className - for define style
 * @property {func} onInputChange - trigger submit
 */

export default class ButtonContainer extends Component {

  static propTypes = {
    onInputChange: func,
    className: number,
    label: string,
  }

  render() {
    const { className, label } = this.props;

    return (
      <TouchableOpacity style={[styles.rootContainer, className]}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </TouchableOpacity>
    );
  }
}
