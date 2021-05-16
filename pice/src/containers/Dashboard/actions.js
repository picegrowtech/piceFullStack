import keymirror from "fbjs/lib/keyMirror";

export const DashScrTypes = keymirror({
  SUBMIT_GET_STR_FORM: null,
  REG_STATUS: null,
  CLS_REDIRECT: null
});

export function uploadGetStrtFrm(data, userName) {
  return { type: DashScrTypes.SUBMIT_GET_STR_FORM, payload: { data, userName } };
}
