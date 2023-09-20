import { all } from "redux-saga/effects";
import userSagas from "./user/saga";
import departmentSagas from "./department/saga";
import dashboardSagas from "./dashboard/saga";
import doctorSagas from "./doctor/saga";
import centerSagas from "./center/saga";
import testSagas from "./test/saga";
import packageSagas from "./package/saga";
import submitSagas from "./submit/saga";
import checkoutSagas from "./checkout/saga";

export default function* rootSaga() {
    yield all([...userSagas, ...departmentSagas, ...dashboardSagas, ...doctorSagas, ...centerSagas, ...testSagas, ...packageSagas, ...submitSagas, ...checkoutSagas]);
}
