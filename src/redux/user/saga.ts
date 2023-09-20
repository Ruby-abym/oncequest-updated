import { takeLatest, call, put } from "redux-saga/effects";
import { loader, toast } from "../common/common-reducer";
import { HttpResponse } from "../common/response-model";
import { getApiTokenAction, loginAction, logoutAction, registorPartnerAction, registorVendorAction } from "./action";
import {loginResponse, logoutResponse, partnerRegisterResponse, vendorRegisterResponse } from "./reducer";
import { UserService } from "./service";

export function* getApiToken(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { loginRequest, history } = payload;
        let res: HttpResponse<any> = yield call(UserService.getInstance().getApitoken, loginRequest);
        let response: any = res;
        localStorage.setItem("oqut", response?.Result?.Token);
     //   yield put(loginResponse(response.user));
        history.push("/");
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* login(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { loginRequest, history } = payload;
        let res: HttpResponse<any> = yield call(UserService.getInstance().login, loginRequest);
        let response: any = res;
        localStorage.setItem("oqu", JSON.stringify(response.user));
        localStorage.setItem("oqut", response.token);
        yield put(loginResponse(response.user));
        history.push("/");
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* vendorRegister(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request, history } = payload;
        let res: HttpResponse<any> = yield call(UserService.getInstance().vendorRegister,Request);
        let response: any = res;
        localStorage.setItem("oqu", JSON.stringify(response.user));
        localStorage.setItem("oqut", response.token);
        yield put(vendorRegisterResponse(response.user));
        history.push("/");
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* partnerRegister(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let {Request, history } = payload;
        let res: HttpResponse<any> = yield call(UserService.getInstance().partnerRegister, Request);
        let response: any = res;
        localStorage.setItem("oqu", JSON.stringify(response.user));
        localStorage.setItem("oqut", response.token);
        yield put(partnerRegisterResponse(response.user));
        history.push("/");
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* logout(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { history } = payload;
        yield localStorage.removeItem("oqu");
        yield localStorage.removeItem("onut");
        yield localStorage.removeItem("oq:city");
        yield localStorage.removeItem("UserLatLng");
        yield localStorage.removeItem("oq:cityData");
        yield put(logoutResponse({}));
        /* history.push("/"); */
        window.location.href="/";
        yield put(toast({ message: "Logout Successfully", type: 'success' }));
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* userEffects() {
    yield takeLatest(getApiTokenAction.type, getApiToken);
    yield takeLatest(loginAction.type, login);
    yield takeLatest(registorVendorAction.type, vendorRegister);
    yield takeLatest(registorPartnerAction.type, partnerRegister);
    yield takeLatest(logoutAction.type, logout);
}

const userSagas = [call(userEffects)];

export default userSagas;
