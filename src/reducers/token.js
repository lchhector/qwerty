const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'STORE_TOKEN':
      return action.payload;
    case 'REMOVE_TOKEN':
      return {};
    default:
      return state;
  }
};

export default tokenReducer;
