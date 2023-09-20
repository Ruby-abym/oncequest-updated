import { createAction } from "@reduxjs/toolkit";

export const listPackageAction = createAction("listPackage", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getPackageBySlugAction = createAction("getPackageBySlug", (slug: any) => ({
    payload: { slug },
}));
export const getSubCategoryByIdAction = createAction("getSubCategoryById", (id: any) => ({
    payload: { id },
}));
export const getAllOfferAction = createAction("getAllOffer", (Request: any) => ({
    payload: { Request },
})); 
export const getAllOfferByIdAction = createAction("getAllOfferById", (id: any) => ({
    payload: { id },
}));
export const getPackageComponetAction = createAction("getPackageComponet", (id: any) => ({
    payload: { id },
}));