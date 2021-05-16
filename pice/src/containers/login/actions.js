import keymirror from "fbjs/lib/keyMirror";

export const LoginScrTypes = keymirror({
  SUBMIT_LOGIN: null,
  LOGIN_STATUS: null,
  CLS_REDIRECT: null,
});

export function sbmitLogin(data) {
  return { type: LoginScrTypes.SUBMIT_LOGIN, payload: data};
}
export function clsRedirectTo(value) {
  return { type: LoginScrTypes.CLS_REDIRECT, payload:  value}
}