import { getDefaultNormalizer } from "@testing-library/react";
import { put, all, takeLatest, call } from "redux-saga/effects";
import { LoginScrTypes } from "./actions";
import axios from "axios";

export function* login({ payload }) {
  /*
   *data in axios receives  email , password
   */

  const response = yield axios({
    url: "http://localhost:8000/login",
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    data: JSON.stringify(payload),
    validateStatus: function (status) {
      return status >= 200 && status < 400;
    },
  });
  /*
   *check whether response.status is btwn 200 to 400 or "success"
   */
  let data = response.data;
  if (!data.status === "success")
    return console.log("response status : !response.ok");
  yield put({
    type: LoginScrTypes.LOGIN_STATUS,
    payload: { response: data, userName: payload.email.split("@")[0] },
  });
}

export default function* root() {
  yield all([takeLatest(LoginScrTypes.SUBMIT_LOGIN, login)]);
}
