import { combineReducers } from 'redux';
import profile from './profile';
import status from './status';
import permissions from './permissions';

const reducers = combineReducers({
  profile,
  permissions,
  status
});

export default reducers;
