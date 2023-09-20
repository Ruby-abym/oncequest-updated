import Api from "../common/api";
import { HttpResponse } from "../common/response-model";
import { Url } from "../common/url";

export class CenterService {
    private static instance: CenterService;
    private constructor() { }

    public static getInstance(): CenterService {
        if (!CenterService.instance) {
            CenterService.instance = new CenterService();
        }
        return CenterService.instance;
    }

    public list = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.centerList, data);
    };
    public getBySlug = async (slug: any): Promise<HttpResponse<any>> => {
        return await Api.post(`${Url.centerBySlug}/${slug}`,{});
    };
    public nearByCenter = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.nearByCenter,data);
    };
    public facility = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.facilities, data);
    };
    public pgOption = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.pgoptions, data);
    };
    public getRelatedCentre = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.centerList, data);
    };
}
