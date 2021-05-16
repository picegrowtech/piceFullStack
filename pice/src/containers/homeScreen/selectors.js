import { createSelector } from "reselect";
const HomeScrState = (state) => state.get("HomeScreen");

export const FetchedData = () =>
  createSelector(HomeScrState, (bstate) => bstate.get("data"));
