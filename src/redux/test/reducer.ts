import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TestState = {
    list: any;
    selected: any;
};

let initialState: TestState = {
    list: {},
    selected: {}
};

const testSlice = createSlice({
    name: "test",
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
        }
    },
});

export const { listResponse, getByIdResponse, getBySlugResponse} = testSlice.actions;

export default testSlice.reducer;
