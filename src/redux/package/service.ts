import Api from "../common/api";
import { HttpResponse } from "../common/response-model";
import { Url } from "../common/url";

export class PackageService {
    private static instance: PackageService;
    private constructor() { }

    public static getInstance(): PackageService {
        if (!PackageService.instance) {
            PackageService.instance = new PackageService();
        }
        return PackageService.instance;
    }

    public list = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.packages, data);
    };
    public getBySlug = async (slug: any): Promise<HttpResponse<any>> => {
        return await Api.post(`${Url.packageBySlug}/${slug}`, {});
    };
    public getSubCategoryById = async (id: any): Promise<HttpResponse<any>> => {
        if(id){
            return await Api.get(`${Url.subcategories}/${id}`);
        }
        return await Api.post(`${Url.subcategories}`, {});
    };
    
    public getAllOffer = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.allOffer, {});
    };
    public getAllOfferById = async (id: any): Promise<HttpResponse<any>> => {
        return await Api.post(`${Url.offerById}/${id}`, {});
    };
    public getPackageComponent = async (id: any): Promise<HttpResponse<any>> => {
        return await Api.post(`${Url.packageComponent}`, {TestIds: id});
    };
}
