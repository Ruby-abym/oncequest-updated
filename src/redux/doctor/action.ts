import { createAction } from "@reduxjs/toolkit";

export const listDoctorAction = createAction("listDoctor", (listRequest: any) => ({
    payload: { listRequest },
}));
export const getDoctorDetailAction = createAction("getDoctorDetail", (data: any) => ({
    payload: { data},
}));
export const getDoctorBySlugAction = createAction("getDoctorBySlug", (slug: any) => ({
    payload: { slug },
}));
