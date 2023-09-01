import { combineReducers } from 'redux';
import contactReducer from './Contact/contact.reducer';
const rootReducer = combineReducers({
    contact: contactReducer,
});
export default rootReducer;