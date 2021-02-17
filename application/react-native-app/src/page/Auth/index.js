import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useStore } from 'packages-hooks';
import React, { useCallback, useEffect, useState } from 'react';

import Loading from 'src/components/Loading';

export default function Auth(props) {
  const [init, setInit] = useState(false);
  const [id, setId] = useState('');
  const { isLogin, dispatch } = useStore();

  useEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 1000);
  }, []);

  const doLogin = useCallback(() => {
    dispatch({ type: 'DO_LOGIN', payload: id });
  }, [dispatch, id]);

  return init ? (
    <>
      {isLogin === false ? (
        <View style={styles.container}>
          <TextInput
            placeholder="your id"
            onChangeText={setId}
            style={styles.input}
          />
          <Button title="login" onPress={doLogin} />
        </View>
      ) : (
        props.children
      )}
    </>
  ) : (
    <View style={styles.container}>
      <Loading />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: '50%',
    padding: 5,
  },
});
