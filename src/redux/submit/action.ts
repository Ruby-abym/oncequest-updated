import { createAction } from "@reduxjs/toolkit";

export const uploadAttachmentAction = createAction("uploadAttachmentAction", (Request: any) => ({
    payload: { Request },
}));
export const blankAttachmentAction = createAction("blankAttachmentAction", (Request: any) => ({
    payload: { Request },
}));
export const uploadPrecriptionAction = createAction("uploadPrecription", (Request: any, history: any) => ({
    payload: { Request, history },
}));
export const submitQueryAction = createAction("submitQuery", (Request: any, history: any) => ({
    payload: { Request, history },
}));
export const submitEnquiryAction = createAction("submitEnquiry", (Request: any, history: any) => ({
    payload: { Request, history },
}));
export const submitPartnerAction = createAction("submitPartner", (Request: any, history: any) => ({
    payload: { Request, history },
}));
export const bookingEnquiryAction = createAction("bookingEnquiry", (Request: any, history: any, slug:any) => ({
    payload: { Request, history,slug },
}));
export const homeCollectionFormAction = createAction("homeCollectionForm", (Request: any, history: any) => ({
    payload: { Request, history },
}));
export const prevMembershipFormAction = createAction("prevMembershipForm", (Request: any, history: any) => ({
    payload: { Request, history },
}));

export const sendEmailAction = createAction("sendEmail", () => ({
    payload: null
}));
export const sendSmsAction = createAction("sendSms", () => ({
    payload: null
}));

