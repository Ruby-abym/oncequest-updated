import Cookies from "js-cookie";
import moment from "moment";
import { useRouter } from "next/router";
export const ImgPlaceHolder = (e: any, img: any) => {
  e.target.onerror = null;
  return (e.target.src = img);
};
export function FDiscount(mrp: any, selling: any) {
  let _dt = ((mrp - selling) / mrp) * 100;
  let dis = Math.round(_dt).toFixed(0);
  if (dis !== "0") {
    return `${dis}%`;  
  }
}
export function onlyNumber(event: any) {
  if (!/[0-9]/.test(event.key) || event.target.value?.length >= 10) {
    event.preventDefault();
  }
}
export function Timeconvert(time: any) {
  if (time && time !== null) {
    return moment(time, ["HH.mm"]).format("hh:mm A");
  }
}
export function getUser() {
  return typeof localStorage !== 'undefined' && JSON.parse(localStorage.getItem("oqu") || "{}");
}
export function getSelectedCity() {
  return typeof localStorage !== 'undefined' && localStorage.getItem("oq:city") || "";
}
export function getAllCityFromLocal() {
  let dt: any = typeof localStorage !== 'undefined' && JSON.parse(localStorage.getItem("oq:cityData") || "{}");
  return dt;
}
export function LoggedIn() {
  return typeof localStorage !== 'undefined' && !!localStorage.getItem("oqu");
}
export async function GetUserLatLng() {
  if (navigator?.geolocation) {
    await navigator?.geolocation.getCurrentPosition((position: any) => {
      let data: any = `${position.coords.latitude},${position.coords.longitude}`;
      return data;
    });
  }
}
export function ReplaceImgUriByLang(url: any, locale:any = "en") {

  return url.replace("public/uploads", `public/${locale}/uploads`);
}
export const groupBy = (items: any[], key: any) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  );
