import { AppRegistry, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';

import { WrapContext } from 'src/store';
import { name as appName } from 'src/app.json';
import App from 'src/App';
import Auth from 'src/page/Auth';

AppRegistry.registerComponent(appName, () => () => (
  <WrapContext>
    <SafeAreaView style={styles.container}>
      <Auth>
        <App />
      </Auth>
    </SafeAreaView>
  </WrapContext>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
