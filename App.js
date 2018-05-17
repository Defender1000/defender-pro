import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AppRegistry, ImageBackground
} from 'react-native';

// import { AppNavigator } from "./src/navigators/AppNavigator";
import HomeScreen from "./src/components/HomeScreen";
import ViewDevice from "./src/components/ViewDevice";
import Preferences from "./src/components/Preferences";
import NotificationSettings from "./src/components/NotificationSettings";



import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { blueBackground, orangeBackground } from "./src/config/styles";


var backgroundSettings = blueBackground;


type Props = {};
class Defender extends Component<Props> {
  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={backgroundSettings}
      >
        <HomeScreen />
      </ImageBackground>
    );
  }
}

AppRegistry.registerComponent("Defender", () => Defender);

export default Defender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
    backgroundImage: {
      alignSelf: "stretch",
      width: null,
      flex: 1
    }
});
