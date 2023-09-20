import { combineReducers } from "@reduxjs/toolkit";
import commonReducer from "./common/common-reducer";
import userReducer from "./user/reducer";
import departmentReducer from "./department/reducer";
import dashboardReducer from "./dashboard/reducer";
import doctorReducer from "./doctor/reducer";
import centerReducer from "./center/reducer";
import testReducer from "./test/reducer";
import packageReducer from "./package/reducer";
import submitReducer from "./submit/reducer";
import checkoutReducer from "./checkout/reducer";

const reducers = {
    common: commonReducer,
    user: userReducer,
    department: departmentReducer,
    dashboard: dashboardReducer,
    doctor: doctorReducer,
    center: centerReducer,
    test: testReducer,
    package: packageReducer,
    submit: submitReducer,
    checkout: checkoutReducer
};

export let rootReducer = combineReducers({
    ...reducers,
});

export default function createReducer(injectedReducers = {}) {
    rootReducer = combineReducers({
        ...reducers,
        ...injectedReducers,
    });

    return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;
