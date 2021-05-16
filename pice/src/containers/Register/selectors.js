import { createSelector } from "reselect";
const RegScrState = (state) => state.get("Register");

export const getRegStatus = () =>
  createSelector(RegScrState, (bstate) => bstate.get("regStatus"));
  
  export const getRedirectTo = () =>
    createSelector(RegScrState, (bstate) => bstate.get("redirectTo"));