import notes from './notes';
import selectedNote from './selectedNote';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  notes,
  selectedNote
});

export default (rootReducer);
