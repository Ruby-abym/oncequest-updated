import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DashboardState = {
    selectedCity: string;
    dashboardData: any;
    testimonial: any;
    city: any[];
    stateWiseCity:any[];
    state:any[];
    generalDetails: any;
    newsAndUpdate: any;
    pressRelease:any;
    cme:any;
    cmeDetails:any;
    selectnewsAndEvent: any;
    selectPress: any;
    faq:any;
    seoDetail:any;
    jobList:any;
    jobApply:any;
};

let initialState: DashboardState = {
    selectedCity: typeof localStorage !== 'undefined' && localStorage.getItem("oq:city") || "",
    dashboardData: {},
    testimonial: {},
    city: typeof localStorage !== 'undefined' && JSON.parse(localStorage.getItem("oq:cityData") || "[]"),
    stateWiseCity: [],
    state:[],
    generalDetails: {},
    newsAndUpdate: {},
    pressRelease: {},
    cme: {},
    cmeDetails: {},
    selectnewsAndEvent: {},
    selectPress: {},
    faq:{},
    seoDetail: {},
    jobList:{},
    jobApply: {}
};

const dashboardSlice = createSlice({
    name: "dashboard",
    initialState,
    reducers: {
        setselectedCityResponse(state, action: PayloadAction<any>) {
            state.selectedCity = action.payload;
        },
        dashboardResponse(state, action: PayloadAction<any>) {
            state.dashboardData = action.payload;
        },
        testimonialResponse(state, action: PayloadAction<any>) {
            state.testimonial = action.payload;
        },
        stateResponse(state, action: PayloadAction<any>) {
            state.state = action.payload;
        },
        StateCityResponse(state, action: PayloadAction<any>) {
            state.stateWiseCity = action.payload;
        },
        cityResponse(state, action: PayloadAction<any>) {
            state.city = action.payload;
        },
        generalDetailResponse(state, action: PayloadAction<any>) {
            state.generalDetails = action.payload;
        },
        cmeResponse(state, action: PayloadAction<any>) {
            state.cme = action.payload;
        },
        cmeBySlugResponse(state, action: PayloadAction<any>) {
            state.cmeDetails = action.payload;
        },
        newsAndUpdateResponse(state, action: PayloadAction<any>) {
            state.newsAndUpdate = action.payload;
        },
        pressReleaseResponse(state, action: PayloadAction<any>) {
            state.pressRelease = action.payload;
        },
        newsAndEventBySlugResponse(state, action: PayloadAction<any>) {
            state.selectnewsAndEvent = action.payload;
        },
        pressReleaseBySlugResponse(state, action: PayloadAction<any>) {
            state.selectPress = action.payload;
        },
        faqResponse(state, action: PayloadAction<any>) {
            state.faq = action.payload;
        },
        seoDetailResponse(state, action: PayloadAction<any>) {
            state.seoDetail = action.payload;
        },
        jobListResponse(state, action: PayloadAction<any>) {
            state.jobList = action.payload;
        },
        jobApplyResponse(state, action: PayloadAction<any>) {
            state.jobApply = action.payload;
        },
    },
});

export const { 
    setselectedCityResponse,
    dashboardResponse, 
    testimonialResponse, 
    stateResponse, 
    cityResponse, 
    StateCityResponse,
    generalDetailResponse, 
    cmeResponse,
    cmeBySlugResponse,
    newsAndUpdateResponse,
    pressReleaseResponse,
    newsAndEventBySlugResponse,
    pressReleaseBySlugResponse,
    faqResponse,
    seoDetailResponse,
    jobListResponse,
    jobApplyResponse
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
