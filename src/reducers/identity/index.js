import { combineReducers } from 'redux';
import username from './username';
import fullname from './fullname';
import email from './email';
import thumbnailurl from './thumbnailurl';

export default combineReducers({
    username,
    fullname,
    email,
    thumbnailurl
});