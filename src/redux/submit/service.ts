import Api from "../common/api";
import { HttpResponse } from "../common/response-model";
import { Url } from "../common/url";

export class SubmitService {
    private static instance: SubmitService;
    private constructor() { }

    public static getInstance(): SubmitService {
        if (!SubmitService.instance) {
            SubmitService.instance = new SubmitService();
        }
        return SubmitService.instance;
    }

    public uploadAttachment = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.uploadAttachment, data);
    };
    public submitQuery = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.querySubmit, data);
    };
    public submitEnquiry = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.enquirySubmit, data);
    };
    public submitPartner = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.enquiryPartner, data);
    };
    public bookingEnquiry = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.bookingEnquiry, data);
    };
    public uploadPrecritiption = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.uploadPrecription, data);
    };
    public homeCollectionForm = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.collectionForm, data);
    };
    public prevMembershipForm = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.membershipForm, data);
    };
}
