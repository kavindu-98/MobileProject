export const OriginDriverReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORIGIN':
      return {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        address: action.payload.address,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export const DestinationDriverReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DESTINATION':
      return {
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        address: action.payload.address,
        name: action.payload.name,
      };
    default:
      return state;
  }
};
