import { takeLatest, call, put } from "redux-saga/effects";
import { loader, toast } from "../common/common-reducer";
import { HttpResponse } from "../common/response-model";
import {  listDepartmentAction, getDepartmentByIdAction, getDepartmentBySlugAction, brochuresListAction } from "./action";
import { getBySlugResponse, getByIdResponse, listResponse, brochuresListResponse } from "./reducer";
import { DepartmentService } from "./service";

export function* list(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(DepartmentService.getInstance().list, listRequest);
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
        let res: HttpResponse<any> = yield call(DepartmentService.getInstance().getById, id);
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
        let res: HttpResponse<any> = yield call(DepartmentService.getInstance().getBySlug, slug);
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
export function* brochuresList(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(DepartmentService.getInstance().brochuresList, Request);
        let response: any = res;
        yield put(brochuresListResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(brochuresListResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* userEffects() {
    yield takeLatest(listDepartmentAction.type, list);
    yield takeLatest(getDepartmentByIdAction.type, getById);
    yield takeLatest(getDepartmentBySlugAction.type, getBySlug);
    yield takeLatest(brochuresListAction.type, brochuresList);
}

const DepartmentSagas = [call(userEffects)];

export default DepartmentSagas;
