import {combineReducers} from 'redux';
import userReducer from './UserDetails/Reducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
