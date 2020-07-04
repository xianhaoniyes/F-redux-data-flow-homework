export const setProfile = profile => {
  return {
    type: 'SET_PROFILE',
    payload: profile
  };
};

export const setPermissions = permissions => {
  return {
    type: 'SET_PERMISSIONS',
    payload: permissions
  };
};

export const setStatus = status => {
  return {
    type: 'SET_STATUS',
    payload: status
  };
};
