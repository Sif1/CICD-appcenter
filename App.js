/* eslint-disable no-alert */

import React from 'react';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import {Button, View, StyleSheet, Text, TextInput} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inflationRate: 0.0,
      riskFreeRate: 0.0,
      amount: 0.0,
      timeInYears: 1,
      afterInflation: 0.0,
      atRiskFree: 0.0,
      atRiskFreeAfterInflation: 0.0,
      difference: 0,
    };
  }

  componentDidMount() {
    this.checkPreviousSession();
  }

  checkPreviousSession = async () => {
	// useless commenta
    //check if the app has crashed in the last active session
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      alert('Sorry about that last crash mate!');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Track Event Test"
          onPress={() => Analytics.trackEvent('Test event!')}
        />
        <Text style={styles.text}>HELLO WORLD</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginHorizontal: 16,
    backgroundColor: '#34e3b7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    color: 'black',
  },
});
