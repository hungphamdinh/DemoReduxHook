import currentUser from './currentUser';
import counter from './counter';
import getStoreItemReducer from '../../features/GetStoreItem/redux/reducer/index';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  currentUser,
  counter,
  getStoreItemReducer,
});

export default rootReducer;
