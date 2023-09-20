import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CenterState = {
    sendOtp: any;
    verifyOtp: any;
    failOtp: boolean,
    slot:any;
    booking: any,
};

let initialState: CenterState = {
    sendOtp: {},
    verifyOtp: {},
    failOtp: false,
    slot: {},
    booking: {}
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        sendOtpResponse(state, action: PayloadAction<any>) {
            state.sendOtp = action.payload;
        },
        verifyOtpResponse(state, action: PayloadAction<any>) {
            state.verifyOtp = action.payload;
        },
        slotResponse(state, action: PayloadAction<any>) {
            state.slot = action.payload;
        },
        bookingResponse(state, action: PayloadAction<any>) {
            state.booking = action.payload;
        },
        otpFailResponse(state, action: PayloadAction<any>) {
            state.failOtp = action.payload;
        }
    },
});

export const { sendOtpResponse, verifyOtpResponse,slotResponse, bookingResponse,otpFailResponse} = checkoutSlice.actions;

export default checkoutSlice.reducer;
