import Api from "../common/api";
import { HttpResponse } from "../common/response-model";
import { Url } from "../common/url";

export class DashboardService {
    private static instance: DashboardService;
    private constructor() { }

    public static getInstance(): DashboardService {
        if (!DashboardService.instance) {
            DashboardService.instance = new DashboardService();
        }
        return DashboardService.instance;
    }

    public getDashboard = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.get(Url.dashboard);
    };
    public getTestimonial = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.testimonials, data);
    };
    public getState = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.get(Url.state);
    };
    public getCity = async (data: any): Promise<HttpResponse<any>> => {
        if(data?.id){
            return await Api.get(`${Url.city}/${data?.id}`);
        } else {
            return await Api.get(`${Url.city}`);
        }
    };
    public generalDetail = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.get(Url.generalDetails);
    };
    public cmeList = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.get(Url.cme);
    };
    public cmeBySlug = async (slug: any): Promise<HttpResponse<any>> => {
        return await Api.post(`${Url.cme}/${slug}`, {});
    };
    public newsAndUpdate = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.get(Url.newsAndUpdate);
    };
    public pressRealease = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.get(Url.pressRealease);
    };
    public newsAndEventBySlug = async (slug: any): Promise<HttpResponse<any>> => {
            return await Api.post(`${Url.newsAndUpdate}/${slug}`,{});
    };
    public pressRealeaseBySlug = async (slug: any): Promise<HttpResponse<any>> => {
        return await Api.post(`${Url.pressreleaseBySlug}/${slug}`, {});
    };
    public faq = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.faq, {});
    };
    public seoDetail = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.seoDetail, data);
    };
    public jobList = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.jobList, data);
    };
    public jobApply = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.jobApply, data);
    };
    public newsletter = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.newsletter, data);
    };
}
