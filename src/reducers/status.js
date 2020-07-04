const status = (state = null, action) => {
  if (action.type === 'SET_STATUS') {
    return action.payload;
  }
  return state;
};

export default status;
