import { takeLatest, call, put } from "redux-saga/effects";
import { loader, toast } from "../common/common-reducer";
import { HttpResponse } from "../common/response-model";
import {  listDoctorAction, getDoctorDetailAction, getDoctorBySlugAction } from "./action";
import { getBySlugResponse, getDetailResponse, listResponse } from "./reducer";
import { DoctorService } from "./service";

export function* list(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(DoctorService.getInstance().list, listRequest);
        let response: any = res;
        yield put(listResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(listResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* getDetail(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload.data;
        let res: HttpResponse<any> = yield call(DoctorService.getInstance().getDetail, payload);
        let response: any = res;
        yield put(getDetailResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(getDetailResponse({}));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* getBySlug(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { slug } = payload;
        let res: HttpResponse<any> = yield call(DoctorService.getInstance().getBySlug, slug);
        let response: any = res;
        if(response?.Success == "True") {
            yield put(getBySlugResponse(response?.Result));
        } else {
            yield put(getBySlugResponse(response));
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(getBySlugResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* userEffects() {
    yield takeLatest(listDoctorAction.type, list);
    yield takeLatest(getDoctorDetailAction.type, getDetail);
    yield takeLatest(getDoctorBySlugAction.type, getBySlug);
}

const doctorSagas = [call(userEffects)];

export default doctorSagas;
