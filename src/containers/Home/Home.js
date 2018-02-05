import React, { Component, PropTypes } from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Easing,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import { toggleDrawer, changeView } from 'app/redux/app.js';
import SideDrawer from 'app/components/SideDrawer/SideDrawer';
import NavBar from 'app/components/NavBar/NavBar';
import SingleDate from 'app/components/SingleDate/SingleDate';
import CalendarStrip from 'react-native-calendar-strip';
import Card from 'app/components/Card/Card';
import { sample } from 'app/lib/mokeData';
import { colorCodes } from 'app/theme';
import styles from './styles.js';

const { object, func } = PropTypes;
let startX = 0;

class App extends Component {
  static propTypes = {
    navigation: object,
    toggleDrawer: func,
    changeView: func,
  }
  componentDidMount() {
    // this.startAnimation();
  }

  startAnimation = () => {
    this.spin();
    setTimeout(() => {
      this.stopSpin();
    }, 600);
  }

  constructor() {
    super();
    this.spinValue = new Animated.Value(1);
  }

  state = {
    currentTimestamp: new Date().getTime()
  }

  addDiary = () => {
    const { navigate } = this.props.navigation;

    navigate('AddDiary');
  }

  stopSpin = () => {
    this.spinValue.stopAnimation();
  }

  spin = () => {
    this.spinValue.setValue(1);
    Animated.timing(
      this.spinValue,
      {
        toValue: 0,
        duration: 600,
      }
    ).start((o) => {
      if (o.finished) {
        this.spin();
      }
    });
  }

  setCurrentTimestamp = (date) => {
    this.setState({
      currentTimestamp: date.valueOf()
    })
  }

  keyExtractor = (item) => item.id;

  renderCards = ({ item }) => (
    <Card data={item} date={item.time} key={item} />
  );

  render() {
    const { navigate } = this.props.navigation;
    const { listView } = this.props;
    const spin = {
      opacity: this.spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      }),
      // transform: [
      //   {
      //     scale: this.spinValue.interpolate({
      //       inputRange: [0, 1],
      //       outputRange: [1, 1],
      //     }),
      //   },
      // ],
    };
    return (
      <View style={styles.homeContainer}>
        <NavBar
          titleText="Diary"
          leftButton="bars"
          leftButtonPress={() => this.props.toggleDrawer()}
          rightButton="sticky-note"
          rightButtonPress={() => this.props.changeView()}
        />
        {
          !listView ?
          <FlatList
            data={sample}
            renderItem={this.renderCards}
            keyExtractor={this.keyExtractor}
          /> :
          <View>
            <View style={styles.calenderContainer}>
              <CalendarStrip
                calendarAnimation={{type: 'sequence', duration: 30}}
                daySelectionAnimation={{type: 'background', duration: 200, borderWidth: 1, highlightColor: 'white'}}
                style={{ height: 100 }}
                calendarHeaderStyle={{color: 'white', fontSize: 14, paddingTop: 10, }}
                calendarColor={colorCodes.calanderColor}
                dateNumberStyle={{color: 'white' }}
                dateNameStyle={{color: 'white' }}
                highlightDateNumberStyle={{color: 'black'}}
                highlightDateNameStyle={{color: 'black'}}
                disabledDateNameStyle={{color: 'white'}}
                disabledDateNumberStyle={{color: 'white'}}
                iconContainer={{flex: 0.1}}
                size={12}
                ref={(input) => { this.calender = input}}
                onDateSelected={this.setCurrentTimestamp}
              />
            </View>
            <Animated.View 
              style={spin}
              onMoveShouldSetResponder={ (event) => true }
              onStartShouldSetResponder={ (event) => {
                startX = 0;
                startX = event.nativeEvent.locationX;
                console.log("start", startX);
              }}
              onResponderRelease={ (event) => {
                let endX = event.nativeEvent.locationX;

                console.log('end', endX);
                if ((startX - endX) > 80) {
                  let timestamp = this.state.currentTimestamp + (24 * 3600 * 1000)
                  this.setState({
                    currentTimestamp: timestamp
                  });
                  this.calender.setSelectedDate(timestamp);
                  // this.startAnimation();
                }
                else if ((startX - endX) < -80) {
                  let timestamp = this.state.currentTimestamp - (24 * 3600 * 1000)
                  this.setState({
                    currentTimestamp: timestamp
                  });
                  this.calender.setSelectedDate(timestamp);
                  // this.startAnimation();
                }
              }}
            >
              <SingleDate date={this.state.currentTimestamp} />
              <SingleDate date={this.state.currentTimestamp} />
            </Animated.View>
          </View>
        }
        <TouchableOpacity style={styles.addDiary} onPress={this.addDiary}>
          <Icon name="plus" size={17} color="#FFF" />
        </TouchableOpacity>
        <SideDrawer navigate={navigate} className={styles.sideDrawer} />
      </View>
    );
  }
}

export default connect((state) => ({
  listView: state.app.listView,
}), {
  toggleDrawer,
  changeView,
})(App);
