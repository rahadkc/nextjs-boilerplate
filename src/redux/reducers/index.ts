// import eventsSlice from './events/eventsSlice'

import { combineReducers } from "@reduxjs/toolkit";

import eventsSlice from "./events/eventsSlice";

const rootReducer = combineReducers({
  eventsData: eventsSlice,
});

// const rootReducer = {
//   eventsData: eventsSlice,
// }

export default rootReducer;
