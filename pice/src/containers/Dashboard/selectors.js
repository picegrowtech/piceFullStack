import { createSelector } from "reselect";
const DashScrState = (state) => state.get("Dashboard");

export const getRegStatus = () =>
  createSelector(DashScrState, (bstate) => bstate.get("regStatus"));
  