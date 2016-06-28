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
      // Don't use push !!!!
      // return state.push(action.payload.data);
      // Instead use concat
      // We can return a new instance of the state
      // return state.concat([action.payload.data]);
      // or in ES6
      return [ action.payload.data , ...state];
      // Means: Take a new array, insert action.payload.data inside and
      // ... means it must be an array so add it the new array
      // output: [ city, city, city]
  }
  return state;
}
