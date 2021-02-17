import { StyleSheet, Text, View } from 'react-native';
import { useStore } from 'packages-hooks';
import React from 'react';

export default function App() {
  const { userId } = useStore();

  return (
    <View style={styles.container}>
      <Text>welcome {userId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
