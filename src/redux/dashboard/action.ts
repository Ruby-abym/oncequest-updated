import { createAction } from "@reduxjs/toolkit";

export const getDashboardAction = createAction("getDashboard", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getStateAction = createAction("getState", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getCityAction = createAction("getCity", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getTestimonialAction = createAction("getTestimonial", (listRequest: any) => ({
    payload: { listRequest },
}));
export const generalDetailAction = createAction("generalDetail", (Request: any) => ({
    payload: {Request },
}));
export const cmeListAction = createAction("cmeLIst", (Request: any) => ({
    payload: {Request },
}));
export const cmeBySlugAction = createAction("cmeBySlug", (slug: any) => ({
    payload: {slug },
}));
export const newsAndUpdateAction = createAction("newsAndUpdate", (Request: any) => ({
    payload: {Request },
}));
export const pressReleaseAction = createAction("pressRelease", (Request: any) => ({
    payload: {Request },
}));
export const newsandEventBySlugAction = createAction("newsandEventBySlug", (slug: any) => ({
    payload: {slug },
}));
export const pressReleaseBySlugAction = createAction("pressReleaseBySlug", (slug: any) => ({
    payload: {slug },
}));
export const getFaqAction = createAction("getFaq", (Request:any) => ({
    payload: {Request},
}));
export const seoDetailAction = createAction("seoDetail", (Request:any) => ({
    payload: {Request},
}));
export const jobListAction = createAction("jobList", (Request:any) => ({
    payload: {Request},
}));
export const jobApplyAction = createAction("jobApply", (Request:any, history:any) => ({
    payload: {Request, history},
}));
export const newsletterAction = createAction("newsletter", (Request:any) => ({
    payload: {Request},
}));