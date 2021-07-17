import { getDefaultNormalizer } from "@testing-library/react";
import { put, all, takeLatest, call } from "redux-saga/effects";
import { RegScrTypes } from "./actions";
import axios from "axios";

export function* register ({ payload }) {
 let data1 = payload.regDetails;
  /*
  *data in axios receives  email , password 
  */
  const  resOne=yield   axios({
    url: "http://localhost:8000/register", 
      headers: {
          'Content-Type': 'application/json'
      },
    method: "post",
    data: JSON.stringify(payload.authDetails),
    validateStatus: function (status) {
     return status >= 200 && status < 400; // default
   }
  })
  
   /*
  *data in axios receives  all details available in registration form
  */
  try{
    const  resTwo= yield  axios({
     url: "http://localhost:8000/savenewuser",
     headers: {
         'Content-Type': 'application/json'
     },
     method: "post",
     data: JSON.stringify(payload.regDetails),
     validateStatus: function (status) {
      return status >= 200 && status < 400; // default
    }
   })
   var resTwoDtls = yield resTwo.json()
  }
  
  finally {
   if(!resOne.data.status  ==="success") return console.log("response status : !response.ok")
   yield put({ type: RegScrTypes.REG_STATUS, payload: resOne.data });
  }
}
export default function* root() {
  yield all([takeLatest(RegScrTypes.SUBMIT_REG, register)]);
}