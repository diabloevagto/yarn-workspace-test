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
        <>
          <input type="text" onChange={(e) => setId(e.target.value)} />
          <button onClick={doLogin}>login</button>
        </>
      ) : (
        props.children
      )}
    </>
  ) : (
    <Loading />
  );
}
