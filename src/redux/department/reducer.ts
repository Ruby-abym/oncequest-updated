import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DepartmentState = {
    list: any;
    selected: any;
    brochures: any;
};

let initialState: DepartmentState = {
    list: {},
    selected: {},
    brochures: {}
};

const departmentSlice = createSlice({
    name: "department",
    initialState,
    reducers: {
        listResponse(state, action: PayloadAction<any>) {
            state.list = action.payload;
        },
        getByIdResponse(state, action: PayloadAction<any>) {
            state.selected = action.payload;
        },
        getBySlugResponse(state, action: PayloadAction<any>) {
            state.selected = action.payload;
        },
        brochuresListResponse(state, action: PayloadAction<any>) {
            state.brochures = action.payload;
        }
    },
});

export const { listResponse, getByIdResponse, getBySlugResponse,brochuresListResponse} = departmentSlice.actions;

export default departmentSlice.reducer;
