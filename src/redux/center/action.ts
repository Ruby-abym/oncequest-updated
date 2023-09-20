import { createAction } from "@reduxjs/toolkit";

export const listCenterAction = createAction("listCenter", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getCenterBySlugAction = createAction("getCenterBySlug", (slug: any) => ({
    payload: { slug },
}));
export const getNearByCenterAction = createAction("getNearByCenter", (Request: any) => ({
    payload: { Request },
}));
export const getFacilityAction = createAction("getFacility", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getPgOptionAction = createAction("getPgOption", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getRelatedCentreAction = createAction("getRelatedCentre", (listRequest: any) => ({
    payload: { listRequest },
}));
