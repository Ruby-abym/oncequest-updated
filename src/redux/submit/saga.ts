import { takeLatest, call, put } from "redux-saga/effects";
import { loader, toast } from "../common/common-reducer";
import { HttpResponse } from "../common/response-model";
import { blankAttachmentAction, bookingEnquiryAction, homeCollectionFormAction, submitEnquiryAction, submitPartnerAction, submitQueryAction, uploadAttachmentAction, uploadPrecriptionAction, prevMembershipFormAction } from "./action";
import { bookingEnquiryResponse, homeCollectionFormResponse, submitQueryResponse, submitPartnerResponse, uploadAttachmentResponse, uploadPrecriptionResponse, prevMembershipFormResponse } from "./reducer";
import { SubmitService } from "./service";
import { ROUTE } from "@/Const/Route";

export function* uploadAttachment(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(SubmitService.getInstance().uploadAttachment, Request);
        let response: any = res;
        if (response?.Success == "True") {
            yield put(uploadAttachmentResponse(response?.Result));
            yield put(toast({ message: "Uploaded Successfully", type: 'success' }));
        } else {
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* blankAttachment(data: any) {
    try {
        yield put(loader(true));
        yield put(uploadAttachmentResponse({}));
        yield put(loader(false));
    } catch (err: any) {
        yield put(uploadAttachmentResponse({}));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* submitQuery(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request, history } = payload;
        let res: HttpResponse<any> = yield call(SubmitService.getInstance().submitQuery, Request);
        let response: any = res;
        if (response?.Success == "True") {
            yield put(submitQueryResponse(response?.Result));
            history.push(ROUTE.THANKYOU);
            yield put(toast({ message: response?.Message, type: 'success' }));
        } else {
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* submitEnquiry(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request, history } = payload;
        let res: HttpResponse<any> = yield call(SubmitService.getInstance().submitEnquiry, Request);
        let response: any = res;
        if (response?.Success == "True") {
            yield put(submitQueryResponse(response?.Result));
            history.push(ROUTE.THANKYOU);
            yield put(toast({ message: response?.Message, type: 'success' }));
        } else {
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* submitPartner(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request, history } = payload;
        let res: HttpResponse<any> = yield call(SubmitService.getInstance().submitPartner, Request);
        let response: any = res;
        if (response?.Success == "True") {
            yield put(submitPartnerResponse(response?.Result));
            history.push(ROUTE.THANKYOU);
            yield put(toast({ message: response?.Message, type: 'success' }));
        } else {
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* bookingEnquiry(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request, history, slug } = payload;
        let res: HttpResponse<any> = yield call(SubmitService.getInstance().bookingEnquiry, Request);
        let response: any = res;
        if (response?.Success == "True") {
            yield put(bookingEnquiryResponse(response?.Result));
            yield put(uploadPrecriptionResponse({}));
            history.push(ROUTE.THANKYOU);
            yield put(toast({ message: response?.Message, type: 'success' }));
        } else {
            history.push(ROUTE.CENTERDETAILS +"/"+ slug);
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* uploadPrecritiption(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request, history } = payload;
        let res: HttpResponse<any> = yield call(SubmitService.getInstance().uploadPrecritiption, Request);
        let response: any = res;
        if (response?.Success == "True") {
            yield put(uploadPrecriptionResponse(response?.Result));
            yield put(uploadPrecriptionResponse({}));
            history.push(ROUTE.THANKYOU);
            yield put(toast({ message: response?.Message, type: 'success' }));
        } else {
            history.push(ROUTE.UPLOADPRESCRIPTION);
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* homeCollectionForm(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request, history } = payload;
        let res: HttpResponse<any> = yield call(SubmitService.getInstance().homeCollectionForm, Request);
        let response: any = res;
        if (response?.Success == "True") {
            yield put(homeCollectionFormResponse(response?.Result));
            history.push(ROUTE.THANKYOU);
            yield put(toast({ message: response?.Message, type: 'success' }));
        } else {
            history.push(ROUTE.HOMECOLLECTION);
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* prevMembershipForm(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request, history } = payload;
        let res: HttpResponse<any> = yield call(SubmitService.getInstance().prevMembershipForm, Request);
        let response: any = res;
        if (response?.Success == "True") {
            yield put(submitQueryResponse(response?.Result));
            history.push(ROUTE.THANKYOU);
            yield put(toast({ message: response?.Message, type: 'success' }));
        } else {
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* userEffects() {
    yield takeLatest(uploadAttachmentAction.type, uploadAttachment);
    yield takeLatest(blankAttachmentAction.type, blankAttachment);
    yield takeLatest(submitQueryAction.type, submitQuery);
    yield takeLatest(submitEnquiryAction.type, submitEnquiry);
    yield takeLatest(submitPartnerAction.type, submitPartner);
    yield takeLatest(bookingEnquiryAction.type, bookingEnquiry);
    yield takeLatest(uploadPrecriptionAction.type, uploadPrecritiption);
    yield takeLatest(homeCollectionFormAction.type, homeCollectionForm);
    yield takeLatest(prevMembershipFormAction.type, prevMembershipForm);
}

const submitSagas = [call(userEffects)];

export default submitSagas;
