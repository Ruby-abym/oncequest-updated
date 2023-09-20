import { takeLatest, call, put } from "redux-saga/effects";
import { loader, toast } from "../common/common-reducer";
import { HttpResponse } from "../common/response-model";
import { cmeBySlugAction, cmeListAction, generalDetailAction, getCityAction, getDashboardAction, getFaqAction, getStateAction, getTestimonialAction, jobApplyAction, jobListAction, newsandEventBySlugAction, newsAndUpdateAction, newsletterAction, pressReleaseAction, pressReleaseBySlugAction, seoDetailAction } from "./action";
import { cityResponse, cmeBySlugResponse, cmeResponse, dashboardResponse, faqResponse, generalDetailResponse, jobApplyResponse, jobListResponse, newsAndEventBySlugResponse, newsAndUpdateResponse, pressReleaseBySlugResponse, pressReleaseResponse, seoDetailResponse, StateCityResponse, stateResponse, testimonialResponse } from "./reducer";
import { DashboardService } from "./service";
import { ROUTE } from "@/Const/Route";

export function* getDashboard(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().getDashboard, listRequest);
        let response: any = res;
        yield put(dashboardResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(dashboardResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* getTestimonial(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().getTestimonial, listRequest);
        let response: any = res;
        yield put(testimonialResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(testimonialResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* getState(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().getState, listRequest);
        let response: any = res;
        yield put(stateResponse(response?.Result?.States));
        yield put(loader(false));
    } catch (err: any) {
        yield put(stateResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* getCity(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { listRequest } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().getCity, listRequest);
        let response: any = res;
        if(listRequest?.id){
            yield put(StateCityResponse(response?.Result?.Cities));
        } else {
            yield put(cityResponse(response?.Result?.Cities));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(cityResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* generalDetail(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().generalDetail, Request);
        let response: any = res;
        yield put(generalDetailResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(generalDetailResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* cmeList(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().cmeList, Request);
        let response: any = res;
        yield put(cmeResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(cmeResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* cmeBySlug(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { slug } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().cmeBySlug, slug);
        let response: any = res;
        if(response?.Success == "True") {
            yield put(cmeBySlugResponse(response?.Result));
        } else {
            yield put(cmeBySlugResponse(response));
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(cmeBySlugResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* newsAndUpdate(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().newsAndUpdate, Request);
        let response: any = res;
        yield put(newsAndUpdateResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(newsAndUpdateResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* pressRealease(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().pressRealease, Request);
        let response: any = res;
        yield put(pressReleaseResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(pressReleaseResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* newsAndEventBySlug(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { slug, type } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().newsAndEventBySlug, slug);
        let response: any = res;
        if(response?.Success == "True") {
            yield put(newsAndEventBySlugResponse(response?.Result));
        } else {
            yield put(newsAndEventBySlugResponse(response));
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(newsAndEventBySlugResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* pressRealeaseBySlug(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { slug, type } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().pressRealeaseBySlug, slug);
        let response: any = res;
        if(response?.Success == "True") {
            yield put(pressReleaseBySlugResponse(response?.Result));
        } else {
            yield put(pressReleaseBySlugResponse(response));
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(pressReleaseBySlugResponse(err));
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* getFaq(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request} = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().faq, Request);
        let response: any = res;
        yield put(faqResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(faqResponse(err));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}

export function* seoDetail(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().seoDetail, Request);
        let response: any = res;
        yield put(seoDetailResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* jobList(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().jobList, Request);
        let response: any = res;
        yield put(jobListResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* jobApply(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request,history } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().jobApply, Request);
        let response: any = res;
        if(response?.Success == "True") {
            yield put(jobApplyResponse(response?.Result));
            history.push(ROUTE.THANKYOU);
            yield put(toast({ message: "You Applied Successfully", type: 'success' }));
        } else {
            history.push(ROUTE.CAREER);
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* newsletter(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(DashboardService.getInstance().newsletter, Request);
        let response: any = res;
        /* yield put(jobApplyResponse(response?.Result)); */
        yield put(toast({ message: response?.Message, type: 'success' }));
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}


export function* userEffects() {
    yield takeLatest(getDashboardAction.type, getDashboard);
    yield takeLatest(getTestimonialAction.type, getTestimonial);
    yield takeLatest(getStateAction.type, getState);
    yield takeLatest(getCityAction.type, getCity);
    yield takeLatest(generalDetailAction.type, generalDetail);
    yield takeLatest(cmeListAction.type, cmeList);
    yield takeLatest(newsAndUpdateAction.type, newsAndUpdate);
    yield takeLatest(pressReleaseAction.type, pressRealease);
    yield takeLatest(newsandEventBySlugAction.type, newsAndEventBySlug);
    yield takeLatest(pressReleaseBySlugAction.type, pressRealeaseBySlug);
    yield takeLatest(getFaqAction.type, getFaq);
    yield takeLatest(cmeBySlugAction.type, cmeBySlug);
    yield takeLatest(seoDetailAction.type, seoDetail);
    yield takeLatest(jobListAction.type, jobList);
    yield takeLatest(jobApplyAction.type, jobApply);
    yield takeLatest(newsletterAction.type, newsletter);
}

const dashboardSagas = [call(userEffects)];

export default dashboardSagas;
