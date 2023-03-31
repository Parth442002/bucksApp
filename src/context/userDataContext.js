import React,{ createContext,useState } from 'react';


const UserDataContext = React.createContext();

const UserDataContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  const updateUser = (newUserData) => {
    setUser({ ...user, ...newUserData });
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserDataContext, UserDataContextProvider };