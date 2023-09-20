import Api from "../common/api";
import { HttpResponse } from "../common/response-model";
import { Url } from "../common/url";

export class TestService {
    private static instance: TestService;
    private constructor() { }

    public static getInstance(): TestService {
        if (!TestService.instance) {
            TestService.instance = new TestService();
        }
        return TestService.instance;
    }

    public list = async (data: any): Promise<HttpResponse<any>> => {
        return await Api.post(Url.tests, data);
    };
    public getById = async (id: any): Promise<HttpResponse<any>> => {
        return await Api.get(`${Url.testById}/${id}`);
    };
    public getBySlug = async (slug: any): Promise<HttpResponse<any>> => {
        return await Api.post(`${Url.testBySlug}/${slug}`, {});
    };
}
