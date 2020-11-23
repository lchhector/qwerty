const emptyUser = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  referredChannel: '',
};

const userReducer = (state = emptyUser, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      const { field, value } = action.payload;
      return {
        ...state,
        [field]: value,
      };
    }
    case 'LOGIN_USER':
      return action.payload;
    case 'REMOVE_USER':
      return emptyUser;
    default:
      return state;
  }
};

export default userReducer;
