import Api from "../common/api";
import { HttpResponse } from "../common/response-model";
import { Url } from "../common/url";

export class CheckoutService {
    private static instance: CheckoutService;
    private constructor() { }

    public static getInstance(): CheckoutService {
        if (!CheckoutService.instance) {
            CheckoutService.instance = new CheckoutService();
        }
        return CheckoutService.instance;
    }

    public sendOtp = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.sendOtp,data);
    };
    public verifyOtp = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.verifyOtp,data);
    };
    public slot = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.slot, data);
    };
    public createBooking = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.createBooking, data);
    };
}
