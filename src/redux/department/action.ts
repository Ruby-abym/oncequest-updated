import { createAction } from "@reduxjs/toolkit";
import { DepartmentRequest } from './model';

export const listDepartmentAction = createAction("listDepartment", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getDepartmentByIdAction = createAction("getDepartmentById", (id: any) => ({
    payload: { id },
}));
export const getDepartmentBySlugAction = createAction("getDepartmentBySlug", (slug: any) => ({
    payload: { slug },
}));
export const brochuresListAction = createAction("brochuresList", (Request: any) => ({
    payload: { Request },
}));
