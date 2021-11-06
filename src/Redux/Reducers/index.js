import Auth from './Auth';
import Navigation from './Navigation';
import {dataReducer} from './data.reducers';
import {userReducer} from './user.reducers';

import {combineReducers} from 'redux';

export default combineReducers({
  data: dataReducer,
  user: userReducer,

  Auth: Auth,
  Navigation: Navigation,
});
