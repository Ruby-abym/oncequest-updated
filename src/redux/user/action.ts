import { createAction } from "@reduxjs/toolkit";
import { LoginRequest } from './model';

export const getApiTokenAction = createAction("getApiToken", (loginRequest: LoginRequest, history: any) => ({
    payload: { loginRequest, history },
}));

export const loginAction = createAction("user/login", (loginRequest: LoginRequest, history: any) => ({
    payload: { loginRequest, history },
}));
export const registorVendorAction = createAction("vendor/register", (Request: any, history: any) => ({
    payload: {Request, history },
}));
export const registorPartnerAction = createAction("partner/register", (Request: any, history: any) => ({
    payload: {Request, history },
}));
export const logoutAction = createAction("user/logout", (history: any) => ({
    payload: { history },
}));
