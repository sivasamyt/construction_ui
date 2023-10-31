import { combineReducers } from '@reduxjs/toolkit';
import React from 'react'

const RootReducer = combineReducers({

});

const combinedReducers = (state: any, action: any) => {
  if (action.type === "logout") {
    state = undefined;
    localStorage.clear();
  }

  return RootReducer(state, action);
};

export default combinedReducers;

export const logout = () => ({
  type: "logout",
});