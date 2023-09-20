import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Submit = {
    uploadAttachment: any;
    submitQuery: any;
    submitEnquiry: any;
    submitPartner: any;
    bookingEnquiry: any;
    uploadPrecription: any;
    homeCollectionForm: any;
    prevMembershipForm: any;
};

let initialState: Submit = {
    uploadAttachment: {},
    submitQuery: {},
    submitEnquiry: {},
    submitPartner: {},
    bookingEnquiry: {},
    uploadPrecription: {},
    homeCollectionForm: {},
    prevMembershipForm: {},
};

const submitSlice = createSlice({
    name: "submit",
    initialState,
    reducers: {
        uploadAttachmentResponse(state, action: PayloadAction<any>) {
            state.uploadAttachment = action.payload;
        },
        submitQueryResponse(state, action: PayloadAction<any>) {
            state.submitQuery = action.payload;
        },
        submitEnquiryResponse(state, action: PayloadAction<any>) {
            state.submitEnquiry = action.payload;
        },
        submitPartnerResponse(state, action: PayloadAction<any>) {
            state.submitPartner = action.payload;
        },
        bookingEnquiryResponse(state, action: PayloadAction<any>) {
            state.bookingEnquiry = action.payload;
        },
        uploadPrecriptionResponse(state, action: PayloadAction<any>) {
            state.uploadPrecription = action.payload;
        },
        homeCollectionFormResponse(state, action: PayloadAction<any>) {
            state.homeCollectionForm = action.payload;
        },
        prevMembershipFormResponse(state, action: PayloadAction<any>) {
            state.prevMembershipForm = action.payload;
        },
    },
});

export const { uploadAttachmentResponse, submitQueryResponse, submitPartnerResponse, submitEnquiryResponse, bookingEnquiryResponse, uploadPrecriptionResponse, homeCollectionFormResponse, prevMembershipFormResponse } = submitSlice.actions;

export default submitSlice.reducer;
