import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DoctorState = {
    list: any[];
    selected: any;
};

let initialState: DoctorState = {
    list: [],
    selected: {}
};

const doctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {
        listResponse(state, action: PayloadAction<any>) {
            state.list = action.payload;
        },
        getDetailResponse(state, action: PayloadAction<any>) {
            state.selected = action.payload;
        },
        getBySlugResponse(state, action: PayloadAction<any>) {
            state.selected = action.payload;
        }
    },
});

export const { listResponse, getDetailResponse, getBySlugResponse} = doctorSlice.actions;

export default doctorSlice.reducer;
