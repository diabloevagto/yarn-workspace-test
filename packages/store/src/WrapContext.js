import React, { createContext, useReducer } from 'react';

const ContextStore = createContext();

const initStore = {
  isLogin: false,
  userId: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'DO_LOGIN':
      return Object.assign({}, state, {
        isLogin: true,
        userId: action.payload,
      });
    default:
      return state;
  }
};

const WrapContext = (props) => {
  const [store, dispatch] = useReducer(reducer, initStore);

  return React.createElement(
    ContextStore.Provider,
    { value: { ...store, dispatch } },
    props.children,
  );
};

export { ContextStore, WrapContext };
