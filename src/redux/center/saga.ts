import { takeLatest, call, put } from "redux-saga/effects";
import { loader, toast } from "../common/common-reducer";
import { HttpResponse } from "../common/response-model";
import {  listCenterAction,  getCenterBySlugAction, getFacilityAction, getPgOptionAction, getNearByCenterAction, getRelatedCentreAction } from "./action";
import { getBySlugResponse, getFacilityResponse, getPgOptionResponse, getRelatedCentreResponse, listResponse, nearByCenterResponse } from "./reducer";
import { CenterService } from "./service";

export function* list(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(CenterService.getInstance().list, listRequest);
        let response: any = res;
        yield put(listResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(listResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* getBySlug(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { slug } = payload;
        let res: HttpResponse<any> = yield call(CenterService.getInstance().getBySlug, slug);
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

export function* nearByCenter(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let {Request } = payload;
        let res: HttpResponse<any> = yield call(CenterService.getInstance().nearByCenter,Request);
        let response: any = res;
        yield put(nearByCenterResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(nearByCenterResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* facility(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(CenterService.getInstance().facility, listRequest);
        let response: any = res;
        yield put(getFacilityResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(getFacilityResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* pgOption(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(CenterService.getInstance().pgOption, listRequest);
        let response: any = res;
        yield put(getPgOptionResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(getPgOptionResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* relatedCenter(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(CenterService.getInstance().getRelatedCentre, listRequest);
        let response: any = res;
        yield put(getRelatedCentreResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(listResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* userEffects() {
    yield takeLatest(listCenterAction.type, list);
    yield takeLatest(getCenterBySlugAction.type, getBySlug);
    yield takeLatest(getNearByCenterAction.type, nearByCenter);
    yield takeLatest(getFacilityAction.type, facility);
    yield takeLatest(getPgOptionAction.type, pgOption);
    yield takeLatest(getRelatedCentreAction.type, relatedCenter);
}

const centerSagas = [call(userEffects)];

export default centerSagas;
