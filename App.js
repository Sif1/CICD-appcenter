/* eslint-disable no-alert */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import {Button, View, StyleSheet} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.checkPreviousSession();
  }

  checkPreviousSession = async () => {
    //check if the app has crashed in the last active session
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      alert('Sorry about that last crash mate!');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Crash" onPress={() => Crashes.generateTestCrash()} />
        <Button
          title="Calculate Inflation"
          onPress={() => Analytics.trackEvent('INFLATION CALC')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginLeft: 20,
    height: 200,
    width: 200,
  },
});
