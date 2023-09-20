import { takeLatest, call, put } from "redux-saga/effects";
import { loader, toast } from "../common/common-reducer";
import { HttpResponse } from "../common/response-model";
import { availableSlotAction, createBookingAction, sendOtpAction, verifyOtpAction } from "./action";
import { bookingResponse, otpFailResponse, sendOtpResponse, slotResponse, verifyOtpResponse } from "./reducer";
import { CheckoutService } from "./service";
import { ROUTE } from "@/Const/Route";

export function* sendOtp(data: any) {
    try {
        /* yield put(loader(true)); */
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(CheckoutService.getInstance().sendOtp, Request);
        let response: any = res;
        if(response?.Success == "True"){
            yield put(sendOtpResponse(response?.Result));
            yield put(otpFailResponse(false));
            yield put(toast({ message: response?.Message, type: 'success' }));
        } else {
            yield put(toast({ message: response?.Message, type: 'error' }));
        }
        /* yield put(loader(false)); */
    } catch (err: any) {
        /* yield put(loader(false)); */
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* verifyOtp(data: any) {
    try {
        /* yield put(loader(true)); */
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(CheckoutService.getInstance().verifyOtp, Request);
        let response: any = res;
        if(response?.Success === "True"){
            yield put(verifyOtpResponse(response?.Result));
            yield localStorage.setItem("oqu", JSON.stringify(response?.Result?.UserDetails || {}));
            yield put(toast({ message: response?.Message, type: 'success' }));
            yield put(otpFailResponse(false));
        } else if(response?.Success === "False"){
            yield put(otpFailResponse(true));
            yield put(toast({ message: "Otp not match", type: 'error' }));
        } else {
            yield put(otpFailResponse(true));
        }
        /* yield put(loader(false)); */
    } catch (err: any) {
        /* yield put(loader(false)); */
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* slot(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request } = payload;
        let res: HttpResponse<any> = yield call(CheckoutService.getInstance().slot, Request);
        let response: any = res;
        yield put(slotResponse(response?.Result));
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}
export function* createBooking(data: any) {
    try {
        yield put(loader(true));
        let payload = data.payload;
        let { Request,history } = payload;
        let res: HttpResponse<any> = yield call(CheckoutService.getInstance().createBooking, Request);
        let response: any = res;
        if(response?.Success == "True") {
            yield put(bookingResponse(response?.Result));
            localStorage.removeItem("CartData")
            history.push(ROUTE.THANKYOU); 
            yield put(toast({ message: response?.Message, type: 'success' }));
        } else {
            history.push(ROUTE.CHECKOUT);
        }
        yield put(loader(false));
    } catch (err: any) {
        yield put(loader(false));
        yield put(toast({ message: err.message, type: 'error' }));
    }
}


export function* userEffects() {
    yield takeLatest(sendOtpAction.type, sendOtp);
    yield takeLatest(verifyOtpAction.type, verifyOtp);
    yield takeLatest(availableSlotAction.type, slot);
    yield takeLatest(createBookingAction.type, createBooking);
}

const checkoutSagas = [call(userEffects)];

export default checkoutSagas;
