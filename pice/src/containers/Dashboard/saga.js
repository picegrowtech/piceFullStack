import { getDefaultNormalizer } from "@testing-library/react";
import { put, all, takeLatest, call } from "redux-saga/effects";
import { DashScrTypes } from "./actions";
import axios from "axios";

export function* uploadGetStrtFrm({ payload }) {

  const uploadFileres = yield axios({
    url: "http://localhost:8000/?dofinalassignment=true&coiupdate=false&domain=ComputerArchitecture&customreviewer=true&missingreviewers=false&revconflicts=false&reviewersforced=true&reviewersload=true&nrpp=5&nppr=NotRequired&runcoi=false&conftool=hotcrp",
    headers: {
      'Content-Type': 'application/json'
    },
    method: "post",
    data: JSON.stringify(payload.data),
    validateStatus: function (status) {
      return status >= 200 && status < 400; // default
    }
  })
  console.log(" uploadFileres :" + uploadFileres);

  const statusRes = yield axios({
    url: "http://localhost:8000/status",

    method: "get",

    validateStatus: function (status) {
      return status >= 200 && status < 400; // default
    }
  })
  console.log(" statusRes :" + statusRes);

  const endRes = yield axios({
    url: `http://localhost:8000/send/?user=${payload.userName}`,

    method: "post",
    validateStatus: function (status) {
      return status >= 200 && status < 400; // default
    }
  })
  console.log(" endRes :" + endRes);


  if (!uploadFileres.data.status === "success") return console.log("response status : !response.ok")
  yield put({ type: DashScrTypes.REG_STATUS, payload: uploadFileres.data });

}
export default function* root() {
  yield all([takeLatest(DashScrTypes.SUBMIT_GET_STR_FORM, uploadGetStrtFrm)]);
}