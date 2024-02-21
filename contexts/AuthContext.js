import React, {createContext, useReducer, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  //   const login = () => {
  //     setUserToken{'abeykavin'};
  //     setIsLoading{false};
  //   }

  //   const logout = () => {
  //     setUserToken{null};
  //     setIsLoading{false};
  //   }
};
