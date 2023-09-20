import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
    loginUser: any;
    isLoggedIn: boolean;
    token:any;
};

let initialState: UserState = {
    loginUser: typeof localStorage !== 'undefined' && JSON.parse(localStorage.getItem("oqu") || "{}"),
    isLoggedIn: typeof localStorage !== 'undefined' && !!localStorage.getItem("oqu"),
    token:typeof localStorage !== 'undefined' && localStorage.getItem("oqut"),
};
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginResponse(state, action: PayloadAction<any>) {
            state.loginUser = action.payload;
            state.isLoggedIn = true;
        },
        vendorRegisterResponse(state, action: PayloadAction<any>) {
        },
        partnerRegisterResponse(state, action: PayloadAction<any>) {
        },
        logoutResponse(state, action: PayloadAction<any>) {
            state.loginUser = action.payload;
            state.isLoggedIn = false;
        },
    },
});

export const { loginResponse, logoutResponse,vendorRegisterResponse,partnerRegisterResponse } = userSlice.actions;

export default userSlice.reducer;
