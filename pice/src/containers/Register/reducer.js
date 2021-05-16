import { InitialState } from "./initialState";
import { RegScrTypes } from "./actions";

function RegScrReducer(state = InitialState, action) {
  switch (action.type) {
    case RegScrTypes.REG_STATUS: {
      return state
      .set("regStatus", action.payload)
      .set("redirectTo", action.payload.location)
    }
    case RegScrTypes.CLS_REDIRECT: {
      return state.set("redirectTo", action.payload);
    }
    default:
      return state;
  }
}

export default RegScrReducer;
