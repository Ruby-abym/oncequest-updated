import { takeLatest, call, put } from "redux-saga/effects";
import { loader, toast } from "../common/common-reducer";
import { HttpResponse } from "../common/response-model";
import {  listPackageAction, getPackageBySlugAction, getSubCategoryByIdAction, getAllOfferAction, getAllOfferByIdAction, getPackageComponetAction } from "./action";
import { getBySlugResponse, listResponse, getSubCategoryByIdResponse, getAllOfferResponse, getAllOfferByIdResponse, getPackageComponentResponse } from "./reducer";
import { PackageService } from "./service";

export function* list(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(PackageService.getInstance().list, listRequest);
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
        let res: HttpResponse<any> = yield call(PackageService.getInstance().getBySlug, slug);
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

export function* getSubCategoryById(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { id } = payload;
        let res: HttpResponse<any> = yield call(PackageService.getInstance().getSubCategoryById, id);
        let response: any = res;
        yield put(getSubCategoryByIdResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(getSubCategoryByIdResponse({}));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* getAllOffer(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(PackageService.getInstance().getAllOffer, Request);
        let response: any = res;
        yield put(getAllOfferResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(getAllOfferResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* getAllOfferById(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { id } = payload;
        let res: HttpResponse<any> = yield call(PackageService.getInstance().getAllOfferById, id);
        let response: any = res;
        yield put(getAllOfferByIdResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(getAllOfferByIdResponse({}));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* getPackageComponent(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { id } = payload;
        let res: HttpResponse<any> = yield call(PackageService.getInstance().getPackageComponent, id);
        let response: any = res;
        yield put(getPackageComponentResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}


export function* userEffects() {
    yield takeLatest(listPackageAction.type, list);
    yield takeLatest(getPackageBySlugAction.type, getBySlug);
    yield takeLatest(getSubCategoryByIdAction.type, getSubCategoryById);
    yield takeLatest(getAllOfferAction.type, getAllOffer);
    yield takeLatest(getAllOfferByIdAction.type, getAllOfferById);
    yield takeLatest(getPackageComponetAction.type, getPackageComponent);
}

const packageSagas = [call(userEffects)];

export default packageSagas;
