import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PackageState = {
    list: any;
    selected: any;
    subCategory:any;
    offer:any;
    selectedOffer:any;
    packageComponent:any;
};

let initialState: PackageState = {
    list: {},
    selected: {},
    subCategory: {},
    offer:{},
    selectedOffer:{},
    packageComponent:{}
};

const packageSlice = createSlice({
    name: "package",
    initialState,
    reducers: {
        listResponse(state, action: PayloadAction<any>) {
            state.list = action.payload;
        },
        getBySlugResponse(state, action: PayloadAction<any>) {
            state.selected = action.payload;
        },
        getSubCategoryByIdResponse(state, action: PayloadAction<any>) {
            state.subCategory = action.payload;
        },
        getAllOfferResponse(state, action: PayloadAction<any>) {
            state.offer = action.payload;
        },
        getAllOfferByIdResponse(state, action: PayloadAction<any>) {
            state.selectedOffer = action.payload;
        },
        getPackageComponentResponse(state, action: PayloadAction<any>) {
            state.packageComponent = action.payload;
        }
    },
});

export const { listResponse, getBySlugResponse, getSubCategoryByIdResponse, getAllOfferResponse, getAllOfferByIdResponse, getPackageComponentResponse} = packageSlice.actions;

export default packageSlice.reducer;
