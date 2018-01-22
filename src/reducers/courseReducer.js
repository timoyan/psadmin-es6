import * as Types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case Types.LOAD_COURSES_SUCCESS:
      return action.courses;
    default:
      return state;
  }
}
