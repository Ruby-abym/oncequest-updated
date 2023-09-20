import { takeLatest, call, put } from "redux-saga/effects";
import { loader, toast } from "../common/common-reducer";
import { HttpResponse } from "../common/response-model";
import {  listTestAction, getTestByIdAction, getTestBySlugAction } from "./action";
import { getBySlugResponse, getByIdResponse, listResponse } from "./reducer";
import { TestService } from "./service";

export function* list(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(TestService.getInstance().list, listRequest);
        let response: any = res;
        yield put(listResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(listResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* getById(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { id } = payload;
        let res: HttpResponse<any> = yield call(TestService.getInstance().getById, id);
        let response: any = res;
        yield put(getByIdResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(getByIdResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* getBySlug(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { slug } = payload;
        let res: HttpResponse<any> = yield call(TestService.getInstance().getBySlug, slug);
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
    yield takeLatest(listTestAction.type, list);
    yield takeLatest(getTestByIdAction.type, getById);
    yield takeLatest(getTestBySlugAction.type, getBySlug);
}

const testSagas = [call(userEffects)];

export default testSagas;
