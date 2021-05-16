import { put, all, takeLatest } from "redux-saga/effects";
import { HomeScrTypes } from "./actions";

export function* submitTicket({ payload }) {
  yield put({ type: HomeScrTypes.SAVE_DATA, payload: payload.details });
}
export default function* root() {
  yield all([takeLatest(HomeScrTypes.BOOK_TICKET, submitTicket)]);
}
