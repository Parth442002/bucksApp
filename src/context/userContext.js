import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [myState, setMyState] = useState();

  const value = {
    myState,
    setMyState
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export { MyContext, MyProvider };