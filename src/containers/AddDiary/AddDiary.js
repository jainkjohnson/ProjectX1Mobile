import React, { Component, PropTypes } from 'react';
import TextContainer from 'app/components/TextContainer/TextContainer';
import NavBar from 'app/components/NavBar/NavBar';
import {
  View,
} from 'react-native';
import styles from './styles';

export default class AddDiary extends Component {

  state = {
    text: ''
  }

  onTextChange = (text) => {
    this.setState({
      text
    });
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View>
        <NavBar leftButton="bars" titleText="Add Diary" leftButtonPress={this.goBack} />
        <TextContainer onInputChange={this.onTextChange} className={styles.textContainer} />
      </View>
    );
  }
}
