import { InitialState } from "./initialState";
import { HomeScrTypes } from "./actions";

function HomeScrReducer(state = InitialState, action) {
  switch (action.type) {
    case HomeScrTypes.SAVE_DATA: {
      return state.set("data", action.payload);
    }

    default:
      return state;
  }
}

export default HomeScrReducer;
