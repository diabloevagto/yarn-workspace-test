import { AppRegistry, SafeAreaView, StyleSheet } from 'react-native';
import { WrapContext } from 'packages-store';
import React from 'react';

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
