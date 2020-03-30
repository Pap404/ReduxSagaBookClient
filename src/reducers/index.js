import {combineReducers } from 'redux';
import book from "./book";
import { reducer as formReducer } from 'redux-form'

export default combineReducers ({
   book,
   form: formReducer
});

