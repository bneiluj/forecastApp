import { FETCH_WEATHER } from '../actions/index';

// Anyway we want to modify an action
// Simple reducer right now
// export default function (state = null, action) {
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // We need to add on the existing state
      // return [ action.payload.data ];
      // so we need to push to the existing state
      // You can't NEVER manipulate state by assigning state
      // you have to use push
      return state.push(action.payload.data);
  }
  return state;
}
