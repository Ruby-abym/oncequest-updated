import Api from "../common/api";
import { HttpResponse } from "../common/response-model";
import { Url } from "../common/url";

export class DoctorService {
    private static instance: DoctorService;
    private constructor() { }

    public static getInstance(): DoctorService {
        if (!DoctorService.instance) {
            DoctorService.instance = new DoctorService();
        }
        return DoctorService.instance;
    }

    public list = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.doctorList, data);
    };
    public getDetail = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.get(`${Url.doctorDetails}/${data?.DoctorCode}`);
    };
    public getBySlug = async (slug: any): Promise<HttpResponse<any>> => {
        return await Api.get(`${Url.doctorBySlug}/${slug}`);
    };
}
