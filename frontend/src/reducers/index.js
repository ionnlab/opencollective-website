import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import form from './form';
import github from './github';
import groups from './groups';
import users from './users';
import notification from './notification';
import transactions from './transactions';
import session from './session';
import subscriptions from './subscriptions';
import images from './images';

export default combineReducers({
  form,
  github,
  groups,
  notification,
  images,
  session,
  subscriptions,
  transactions,
  users,
  router
});
