import { createAction } from "@reduxjs/toolkit";

export const listTestAction = createAction("listTest", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getTestByIdAction = createAction("getTestById", (id: any) => ({
    payload: { id },
}));
export const getTestBySlugAction = createAction("getTestBySlug", (slug: any) => ({
    payload: { slug },
}));
