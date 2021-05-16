import { InitialState } from "./initialState";
import { LoginScrTypes } from "./actions";

function LoginScrReducer(state = InitialState, action) {
  switch (action.type) {
    case LoginScrTypes.LOGIN_STATUS: {
      return state
        .set("loginStatus", action.payload.response.status)
        .set("redirectTo", action.payload.response.location)
        .set("userName", action.payload.userName)
    }
    case LoginScrTypes.CLS_REDIRECT: {
      return state.set("redirectTo", action.payload);
    }
    default:
      return state;
  }
}

export default LoginScrReducer;
