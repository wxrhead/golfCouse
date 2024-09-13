import React, {useEffect} from 'react';
import {Platform, StatusBar, UIManager, View} from 'react-native';

import AppNavigator from './src/navigation';
import SystemNavigationBar from 'react-native-system-navigation-bar';

function App() {
  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <AppNavigator />
    </View>
  );
}

export default App;
