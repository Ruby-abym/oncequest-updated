import Api from "../common/api";
import { HttpResponse } from "../common/response-model";
import { Url } from "../common/url";
import { LoginRequest } from "./model";

export class UserService {
    private static instance: UserService;
    private constructor() { }

    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }
        return UserService.instance;
    }

    public getApitoken = async (data: LoginRequest): Promise<HttpResponse<any>> => {
        return await Api.get(Url.apiGetToken);
    };

    public login = async (data: LoginRequest): Promise<HttpResponse<any>> => {
        return await Api.post(Url.login, data);
    };
    public vendorRegister = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.login, data);
    };
    public partnerRegister = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.login, data);
    };
}
