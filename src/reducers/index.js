import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    // Here is related to state
    courses,
    authors,
    ajaxCallsInProgress
});

export default rootReducer;
