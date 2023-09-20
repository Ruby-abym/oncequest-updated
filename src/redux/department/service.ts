import Api from "../common/api";
import { HttpResponse } from "../common/response-model";
import { Url } from "../common/url";
import { DepartmentRequest } from "./model";

export class DepartmentService {
    private static instance: DepartmentService;
    private constructor() { }

    public static getInstance(): DepartmentService {
        if (!DepartmentService.instance) {
            DepartmentService.instance = new DepartmentService();
        }
        return DepartmentService.instance;
    }

    public list = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.departmentList, data);
    };
    public getById = async (id: any): Promise<HttpResponse<any>> => {
        return await Api.get(`${Url.departmentDetails}/${id}`);
    };
    public getBySlug = async (slug: any): Promise<HttpResponse<any>> => {
        return await Api.post(`${Url.departmentBySlug}/${slug}`, {});
    };
    public  brochuresList = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.get(Url.brochures);
    };
}
