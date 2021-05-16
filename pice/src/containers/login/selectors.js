import { createSelector } from "reselect";
const LoginScrState = (state) => state.get("Login");

export const getLoginStatus = () =>
  createSelector(LoginScrState, (bstate) => bstate.get("loginStatus"));

export const getRedirectTo = () =>
  createSelector(LoginScrState, (bstate) => bstate.get("redirectTo"));

export const getUserName = () =>
  createSelector(LoginScrState, (bstate) => bstate.get("userName"));