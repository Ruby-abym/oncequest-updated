import { createAction } from "@reduxjs/toolkit";

export const sendOtpAction = createAction("sendOtp", (Request: any) => ({
    payload: { Request },
}));
export const verifyOtpAction = createAction("verifyOtp", (Request: any) => ({
    payload: { Request },
}));
export const createBookingAction = createAction("createBooking", (Request: any, history:any) => ({
    payload: { Request,history },
}));
export const availableSlotAction = createAction("availableSlot", (Request: any) => ({
    payload: {Request },
}));
