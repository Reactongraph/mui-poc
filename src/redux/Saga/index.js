import { takeLatest, put } from "redux-saga/effects";
import actions from "../Actions";
import caller from "./../../utils/apiCaller";
import notification from "../../utils/notification";
import * as api from "../../utils/constant";

export function* loginRequest({ payload }) {
  try {
    const { status, data } = yield caller(api.LOGIN, "POST", payload);
    if (status >= 400) {
      notification.error(data?.message || data?.error);
    } else if (status >= 200 && status <= 204) {
      window.localStorage.setItem("token", data?.token);
      yield put(actions.storeLoginResponse(data));
    }
  } catch (error) {
    notification.error(error?.message);
  }
}

export function* signUpRequest({ payload }) {
  try {
    const { status, data } = yield caller(api.REGISTER, "POST", payload);
    if (status >= 400) {
      notification.error(data?.message || data?.error);
    } else if (status >= 200 && status <= 204) {
      window.localStorage.setItem("token", data?.token);
      yield put(actions.storeLoginResponse(data));
    }
  } catch (error) {
    notification.error(error?.message);
  }
}

// ***** BINDING ACTION AND FUNCTION LOGIC ***** //
export default function* rootSaga() {
  yield takeLatest(actions.REQUEST_LOGIN, loginRequest);
  yield takeLatest(actions.REQUEST_SIGNUP, signUpRequest);
}
