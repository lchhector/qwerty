const updateUser = (field, value) => ({
  type: 'UPDATE_USER',
  payload: {
    field,
    value,
  },
});

const loginUser = (userData) => ({
  type: 'LOGIN_USER',
  payload: userData,
});

const removeUser = () => ({
  type: 'REMOVE_USER',
});

const storeToken = (token) => ({
  type: 'STORE_TOKEN',
  payload: token,
});

const removeToken = () => ({
  type: 'REMOVE_TOKEN',
});

// store token, signin, signout

export {
  updateUser, loginUser, removeUser, storeToken, removeToken,
};
