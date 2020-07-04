const permissions = (state = null, action) => {
  if (action.type === 'SET_PERMISSIONS') {
    return action.payload;
  }
  return state;
};

export default permissions;
