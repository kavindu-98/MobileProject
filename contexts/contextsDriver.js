import React, {createContext, useReducer} from 'react';
import {
  OriginDriverReducer,
  DestinationDriverReducer,
} from '../reducers/Dreducers';

export const OriginDriverContext = createContext();
export const DestinationDriverContext = createContext();

export const OriginDriverContextProvider = props => {
  const [Dorigin, dispatchOrigin] = useReducer(OriginDriverReducer, {
    latitude: null,
    longitude: null,
    address: '',
    name: '',
  });
  return (
    <OriginDriverContext.Provider value={{Dorigin, dispatchOrigin}}>
      {props.children}
    </OriginDriverContext.Provider>
  );
};

export const DestinationDriverContextProvider = props => {
  const [Ddestination, dispatchDestination] = useReducer(
    DestinationDriverReducer,
    {
      latitude: null,
      longitude: null,
      address: '',
      name: '',
    },
  );
  return (
    <DestinationDriverContext.Provider
      value={{Ddestination, dispatchDestination}}>
      {props.children}
    </DestinationDriverContext.Provider>
  );
};
