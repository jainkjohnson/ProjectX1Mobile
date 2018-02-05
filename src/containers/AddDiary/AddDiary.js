import React, { Component, PropTypes } from 'react';
import TextContainer from 'app/components/TextContainer/TextContainer';
import ButtonContainer from 'app/components/ButtonContainer/ButtonContainer';
import NavBar from 'app/components/NavBar/NavBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  TouchableOpacity,
  Easing,
  Animated,
  Text,
} from 'react-native';
import styles from './styles';

const { func } = PropTypes;

/**
 * Class representing adding content to diary
 */

export default class AddDiary extends Component {

  static propTypes = {
    navigation: func,
  }

  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }

  state = {
    text: '',
  }
  componentDidMount() {
    this.spin();
    setTimeout(() => {
      this.stopSpin();
    }, 500);
  }

  onTextChange = (text) => {
    this.setState({
      text
    });
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  stopSpin = () => {
    this.spinValue.stopAnimation();
  }

  spin= () => {
    this.spinValue.setValue(0);
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.linear
      }
    ).start((o) => {
      if (o.finished) {
        this.spin();
      }
    });
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    return (
      <View>
        <NavBar leftButton="arrow-left" titleText="Add Diary" leftButtonPress={this.goBack} />
        <TextContainer onInputChange={this.onTextChange} className={styles.textContainer} icon="calendar" />
        <TextContainer onInputChange={this.onTextChange} className={styles.textContainer} icon="pencil" />
        <TextContainer
          onInputChange={this.onTextChange}
          className={styles.textContainer}
          multiline
          numberOfLines={10}
        />
        <TouchableOpacity>
          <Animated.View style={[styles.addDiary, { transform: [{ rotate: spin }] }]} onPress={this.addDiary}>
            <Icon name="plus" size={17} color="#fff" />
          </Animated.View>
        </TouchableOpacity>
        <ButtonContainer label="Save" className={styles.textContainer} />
      </View>
    );
  }
}
