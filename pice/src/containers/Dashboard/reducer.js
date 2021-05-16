import { InitialState } from "./initialState";
import { DashScrTypes } from "./actions";

function DashScrReducer(state = InitialState, action) {
  switch (action.type) {
    case DashScrTypes.REG_STATUS: {
      return state
      .set("regStatus", action.payload)
      .set("redirectTo", action.payload.location)
    }
    case DashScrTypes.CLS_REDIRECT: {
      return state.set("redirectTo", action.payload);
    }
    default:
      return state;
  }
}

export default DashScrReducer;
