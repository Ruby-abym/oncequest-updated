import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CenterState = {
    list: any;
    selected: any;
    nearByCenter:any;
    pgOption: any,
    facility: any,
    relatedCentre:any,
};

let initialState: CenterState = {
    list: {},
    selected: {},
    nearByCenter: {},
    pgOption: {},
    facility: {},
    relatedCentre:{},
};

const centerSlice = createSlice({
    name: "center",
    initialState,
    reducers: {
        listResponse(state, action: PayloadAction<any>) {
            state.list = action.payload;
        },
        getBySlugResponse(state, action: PayloadAction<any>) {
            state.selected = action.payload;
        },
        nearByCenterResponse(state, action: PayloadAction<any>) {
            state.nearByCenter = action.payload;
        },
        getFacilityResponse(state, action: PayloadAction<any>) {
            state.facility = action.payload;
        },
        getPgOptionResponse(state, action: PayloadAction<any>) {
            state.pgOption = action.payload;
        },
        getRelatedCentreResponse(state, action: PayloadAction<any>) {
            state.relatedCentre = action.payload;
        }
    },
});

export const { listResponse, getBySlugResponse,nearByCenterResponse, getFacilityResponse, getPgOptionResponse, getRelatedCentreResponse} = centerSlice.actions;

export default centerSlice.reducer;
