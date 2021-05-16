import keymirror from "fbjs/lib/keyMirror";

export const RegScrTypes = keymirror({
  SUBMIT_REG: null,
  REG_STATUS: null,
  CLS_REDIRECT: null
});

export function sbmitReg(data) {
  return { type: RegScrTypes.SUBMIT_REG, payload:  {authDetails:{email:data.email, password:data.password}, regDetails:data}  };
}

export function clsRedirectTo(value) {
  return { type: RegScrTypes.CLS_REDIRECT, payload:  value}
}