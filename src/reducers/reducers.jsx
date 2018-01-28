import { combineReducers} from 'redux';
import mainReducer from './mainReducer';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';
const rootReducer = combineReducers({
  page: mainReducer,
  form: formReducer,
  toastr:toastrReducer
});

export default rootReducer;
