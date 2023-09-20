import $ from "jquery";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import WelcomePopup from "./PopUpForm";
import Usersvg from "./usersvg";
import { userAction } from "@/redux/action";
import { setselectedCityResponse } from "@/redux/dashboard/reducer";
import Link from "next/link";
import { ROUTE } from "@/Const/Route";
import { LoggedIn, getUser } from "@/Utils";
import { useRouter } from "next/router";
import LanguageSelectMobile from "@/languageSelectMobile";
import LanguageSelect from "@/languageSelect";
import CitySelectBox from "./CitySelectBox";
import Image from "next/image";
import { useTranslation } from "next-i18next";
function Header(props: any) {
  const  {t} = useTranslation();
  const { cityData, city, setCity } = props;
  const dispatch = useDispatch();
  const anchorRef1 = useRef(null);
  const router = useRouter();
  const { locale } = useRouter();
  
  const { pathname } = router;
  const [toggelOpne, settoggelOpne] = useState<any>("");
  const [anchor1, setAnchor1] = useState<boolean>(false);
  const logout = (e: any) => {
    dispatch(userAction.logoutAction(history));
  };
  const addClass = () => {
    $("#openTab").addClass("open")
    $("#zeynepOpen").addClass("zeynep-opened")
    // document.body.classList.add("bg-notscroll");
  };
  const removeClass = () => {
    $("#openTab").removeClass("open")
    $("#zeynepOpen").removeClass("zeynep-opened")
    // document.body.classList.remove("bg-notscroll");
  };
  const togglehendle = (e: any) => {
    if (toggelOpne == true) {
      settoggelOpne(false);
    } else {
      settoggelOpne(e);
    }
  };
  useEffect(() => {
    if (anchor1) {
      window?.scroll(0, 0);
    }
    return () => {};
  }, [anchor1]);

  const handleCityChange = async (e: any) => {
    dispatch(setselectedCityResponse(e.target.value));
    setCity(e.target.value);
    if (e.target.value === "") {
      await window?.localStorage.removeItem("oq:city");
    } else {
      await window?.localStorage.setItem("oq:city", e.target.value);
    }
    if (pathname === ROUTE.CENTER) {
      router.push(ROUTE.CENTER);
    }
  };

  return (
    <>
      <div className="topbar-section">
        <div className="container-fluid">
          <div className="topbar-inner">
            <div className="top-bar-left">
              <Link href={ROUTE.HOME} passHref>
                <Image src="/assets/img/logo.png" alt="logo-png" width={0} height={0} sizes="100vw" className="w-100 h-auto" />
              </Link>
            </div>
            <div className="top-bar-right">
              <ul className="righttop mob-d-block">
                <li className="getstart drp mob-drp">
                  <LanguageSelect />
                </li>
                <li className="getstart drp mob-drp">
                  <Link href="tel: 0124-6650000" passHref legacyBehavior>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35.045"
                      height="28.875"
                      viewBox="0 0 35.045 28.875"
                    >
                      <g
                        id="Group_922"
                        data-name="Group 922"
                        transform="translate(-2173.523 -718.297)"
                      >
                        <g
                          id="Group_921"
                          data-name="Group 921"
                          transform="translate(2173.523 718.297)"
                        >
                          <path
                            id="Path_4732"
                            data-name="Path 4732"
                            d="M2772.343,1121.855c.428.11,1.114.275,1.2,1.079a3.343,3.343,0,0,1-.378,1.514,16.1,16.1,0,0,1-1.588,2.422l.087.061a.565.565,0,0,0-.3.436.9.9,0,0,0,.245.679.283.283,0,0,0,.254.1.357.357,0,0,0,.167-.126,12.435,12.435,0,0,0,1.883-2.845,4.913,4.913,0,0,0,.494-1.5,2.241,2.241,0,0,0-.312-1.522,2.993,2.993,0,0,0-1.925-1.051Z"
                            transform="translate(-2752.766 -1108.57)"
                            fill="#03277d"
                          />
                          <g
                            id="Group_900"
                            data-name="Group 900"
                            transform="translate(0 3.98)"
                          >
                            <rect
                              id="Rectangle_641"
                              data-name="Rectangle 641"
                              width="11.757"
                              height="10.473"
                              rx="5.236"
                              fill="#1765cf"
                            />
                            <rect
                              id="Rectangle_642"
                              data-name="Rectangle 642"
                              width="11.757"
                              height="10.473"
                              rx="5.236"
                              transform="translate(0.633)"
                              fill="#4f94f9"
                            />
                          </g>
                          <g
                            id="Group_901"
                            data-name="Group 901"
                            transform="translate(4.284 14.406)"
                          >
                            <line
                              id="Line_64"
                              data-name="Line 64"
                              x2="3.494"
                              y2="2.63"
                              transform="translate(1.189)"
                              fill="none"
                              stroke="#03277d"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="5.335"
                            />
                            <line
                              id="Line_65"
                              data-name="Line 65"
                              x1="8.106"
                              fill="none"
                              stroke="#03277d"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="5.335"
                            />
                          </g>
                          <g
                            id="Group_902"
                            data-name="Group 902"
                            transform="translate(18.174 2.414)"
                          >
                            <rect
                              id="Rectangle_643"
                              data-name="Rectangle 643"
                              width="1.424"
                              height="2.373"
                              transform="translate(0.438 0) rotate(10.634)"
                              fill="#fe9592"
                            />
                            <path
                              id="Path_4733"
                              data-name="Path 4733"
                              d="M2766.877,795.937l-.169.9a5,5,0,0,1,1.141,1.639l.428-2.278Z"
                              transform="translate(-2766.439 -795.937)"
                              fill="#fb7874"
                            />
                          </g>
                          <g
                            id="Group_903"
                            data-name="Group 903"
                            transform="translate(14.707 4.01)"
                          >
                            <path
                              id="Path_4734"
                              data-name="Path 4734"
                              d="M2650.925,853.991c.278-1.637.54-2.808.753-4.46a2.223,2.223,0,0,0-1.107-2.15,1.966,1.966,0,0,0-1.6.128,3.653,3.653,0,0,0-1.451,2.055,18.622,18.622,0,0,0-.8,3.239,4.376,4.376,0,0,0-.03,2.139A8.443,8.443,0,0,0,2650.925,853.991Z"
                              transform="translate(-2646.559 -847.267)"
                              fill="#70bb92"
                            />
                            <path
                              id="Path_4735"
                              data-name="Path 4735"
                              d="M2735.891,898.986a8.618,8.618,0,0,1-2.376,5.767,8.417,8.417,0,0,0,1.662-.651c.278-1.637.54-2.808.753-4.46A1.98,1.98,0,0,0,2735.891,898.986Z"
                              transform="translate(-2730.811 -897.378)"
                              fill="#48956b"
                            />
                            <path
                              id="Path_4736"
                              data-name="Path 4736"
                              d="M2658.6,1064.86a3.865,3.865,0,0,0-2.5-1.5c-.141-.022-1.3-.2-1.328-.022,0-.024.008-.046.012-.07a8.444,8.444,0,0,1-4.242.951,1.826,1.826,0,0,0,.157.347c.722,1.214,2.306,1.034,3.508,1.057.805.015,2.288.015,2.543,1.01a1.921,1.921,0,0,1-.009.819,7.766,7.766,0,0,1-.87,2.258c-.089.165-1.159,2-1.184,1.982l.613.4c.23.149,1.349-1.178,1.485-1.369.471-.659.953-1.325,1.377-2.016a5.122,5.122,0,0,0,.858-2.5A2.263,2.263,0,0,0,2658.6,1064.86Z"
                              transform="translate(-2650.412 -1056.547)"
                              fill="#436dd6"
                            />
                            <path
                              id="Path_4737"
                              data-name="Path 4737"
                              d="M2656.95,1095.911c-1.1-1.726-4.571.4-5.925-1.747-.163,0-.326,0-.489,0a1.827,1.827,0,0,0,.157.347c.722,1.214,2.306,1.034,3.508,1.057.805.015,2.288.015,2.543,1.01a1.921,1.921,0,0,1-.009.819,7.766,7.766,0,0,1-.87,2.258c-.089.165-1.159,2-1.184,1.982l.114.074C2656.435,1099.929,2658.272,1098.025,2656.95,1095.911Z"
                              transform="translate(-2650.412 -1086.483)"
                              fill="#315fd2"
                            />
                          </g>
                          <g
                            id="Group_911"
                            data-name="Group 911"
                            transform="translate(7.025 6.957)"
                          >
                            <g id="Group_910" data-name="Group 910">
                              <g
                                id="Group_904"
                                data-name="Group 904"
                                transform="translate(0 10.441)"
                              >
                                <circle
                                  id="Ellipse_2038"
                                  data-name="Ellipse 2038"
                                  cx="4.058"
                                  cy="4.058"
                                  r="4.058"
                                  transform="translate(0 5.739) rotate(-45)"
                                  fill="#03277d"
                                />
                                <circle
                                  id="Ellipse_2039"
                                  data-name="Ellipse 2039"
                                  cx="2.719"
                                  cy="2.719"
                                  r="2.719"
                                  transform="translate(1.893 5.739) rotate(-45)"
                                  fill="#1765cf"
                                />
                                <circle
                                  id="Ellipse_2040"
                                  data-name="Ellipse 2040"
                                  cx="1.114"
                                  cy="1.114"
                                  r="1.114"
                                  transform="translate(4.163 5.739) rotate(-45)"
                                  fill="#b2b2b2"
                                />
                              </g>
                              <g
                                id="Group_905"
                                data-name="Group 905"
                                transform="translate(0.009 2.265)"
                              >
                                <path
                                  id="Path_4738"
                                  data-name="Path 4738"
                                  d="M2420.74,1014.923h-2.482a11.406,11.406,0,0,1,.457,6.5c-.271,1.406-1.64,4.425-3.374,4.384-1.487-.035-3.527-.2-4.23-2.1a3.739,3.739,0,0,1,.716-3.992l-6.3,0c-1.519,0-5.282,1.01-5.752,7.151a1.1,1.1,0,0,0,1.113,1.147h18.356l1.458-3.626,2.019.692c.748-.847,2.21,1.1,2.446,0C2426.448,1019.12,2420.74,1014.923,2420.74,1014.923Z"
                                  transform="translate(-2399.776 -1014.923)"
                                  fill="#fdb702"
                                />
                              </g>
                              <path
                                id="Path_4739"
                                data-name="Path 4739"
                                d="M2918.556,1014.923H2916.8a11.406,11.406,0,0,1,.457,6.5c-.248,1.287-1.416,3.89-2.942,4.321C2915.761,1025.646,2920.69,1022.642,2918.556,1014.923Z"
                                transform="translate(-2898.306 -1012.658)"
                                fill="#fd9f02"
                              />
                              <g
                                id="Group_908"
                                data-name="Group 908"
                                transform="translate(16.543 10.441)"
                              >
                                <g
                                  id="Group_906"
                                  data-name="Group 906"
                                  transform="translate(0 0)"
                                >
                                  <circle
                                    id="Ellipse_2041"
                                    data-name="Ellipse 2041"
                                    cx="4.058"
                                    cy="4.058"
                                    r="4.058"
                                    transform="translate(0 5.739) rotate(-45)"
                                    fill="#03277d"
                                  />
                                  <circle
                                    id="Ellipse_2042"
                                    data-name="Ellipse 2042"
                                    cx="2.719"
                                    cy="2.719"
                                    r="2.719"
                                    transform="translate(1.893 5.739) rotate(-45)"
                                    fill="#1765cf"
                                  />
                                  <circle
                                    id="Ellipse_2043"
                                    data-name="Ellipse 2043"
                                    cx="1.114"
                                    cy="1.114"
                                    r="1.114"
                                    transform="matrix(0.23, -0.973, 0.973, 0.23, 4.398, 6.567)"
                                    fill="#b2b2b2"
                                  />
                                </g>
                                <g
                                  id="Group_907"
                                  data-name="Group 907"
                                  transform="translate(1.496 0.933)"
                                >
                                  <path
                                    id="Path_4740"
                                    data-name="Path 4740"
                                    d="M2987.842,1311.726a.264.264,0,0,0,.414-.278,4.347,4.347,0,0,0-8.54,0,.264.264,0,0,0,.414.278,6.519,6.519,0,0,1,7.712,0Z"
                                    transform="translate(-2979.707 -1307.915)"
                                    fill="#fd9f02"
                                  />
                                </g>
                              </g>
                              <path
                                id="Path_4741"
                                data-name="Path 4741"
                                d="M3085.936,942.263v2.253a1.133,1.133,0,0,0,1.014-1.126h0A1.133,1.133,0,0,0,3085.936,942.263Z"
                                transform="translate(-3064.594 -942.257)"
                                fill="#fdb702"
                              />
                              <path
                                id="Path_4742"
                                data-name="Path 4742"
                                d="M2980.747,942.06h-2.65a.6.6,0,0,0-.6.6v1.06a.6.6,0,0,0,.6.6h2.65a1.132,1.132,0,0,0,.119-.006v-2.253A1.132,1.132,0,0,0,2980.747,942.06Z"
                                transform="translate(-2959.523 -942.06)"
                                fill="#fd9f02"
                              />
                              <path
                                id="Path_4743"
                                data-name="Path 4743"
                                d="M2918.528,965.141l-2.629,1.322a.423.423,0,0,1-.38-.756l.024-.011,2.706-1.157a.332.332,0,0,1,.28.6Z"
                                transform="translate(-2899.25 -963.814)"
                                fill="#03277d"
                              />
                              <g
                                id="Group_909"
                                data-name="Group 909"
                                transform="translate(2.819 8.266)"
                              >
                                <path
                                  id="Path_4744"
                                  data-name="Path 4744"
                                  d="M2492.374,1207.918a6.261,6.261,0,0,0-2.234.411c3.144.027,5.769,1.931,6.237,4.964a.88.88,0,0,0,.864.756h.442a.875.875,0,0,0,.855-1.047A6.28,6.28,0,0,0,2492.374,1207.918Z"
                                  transform="translate(-2490.14 -1207.918)"
                                  fill="#fd9f02"
                                />
                              </g>
                            </g>
                          </g>
                          <rect
                            id="Rectangle_644"
                            data-name="Rectangle 644"
                            width="8.377"
                            height="1.066"
                            rx="0.533"
                            transform="translate(11.57 13.026)"
                            fill="#03277d"
                          />
                          <g
                            id="Group_915"
                            data-name="Group 915"
                            transform="translate(8.812 18.203)"
                          >
                            <g id="Group_912" data-name="Group 912">
                              <path
                                id="Path_4745"
                                data-name="Path 4745"
                                d="M2461.857,1304.108H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z"
                                transform="translate(-2456.948 -1303.796)"
                                fill="#03277d"
                              />
                            </g>
                            <g
                              id="Group_913"
                              data-name="Group 913"
                              transform="translate(0 0.93)"
                            >
                              <path
                                id="Path_4746"
                                data-name="Path 4746"
                                d="M2461.857,1334.026H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z"
                                transform="translate(-2456.948 -1333.714)"
                                fill="#03277d"
                              />
                            </g>
                            <g
                              id="Group_914"
                              data-name="Group 914"
                              transform="translate(0 1.86)"
                            >
                              <path
                                id="Path_4747"
                                data-name="Path 4747"
                                d="M2461.857,1363.944H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z"
                                transform="translate(-2456.948 -1363.632)"
                                fill="#03277d"
                              />
                            </g>
                          </g>
                          <path
                            id="Path_4748"
                            data-name="Path 4748"
                            d="M2728.549,869.47a3.836,3.836,0,0,0,1.58.98,1.994,1.994,0,0,0,.881.135c.38-.052.76-.142,1.137-.212a1.4,1.4,0,0,1,.617-.022.422.422,0,0,1,.184.775c-.185.147-.35.3-.581.121a3.015,3.015,0,0,0-.324-.29,1.016,1.016,0,0,0-.778.031,4.206,4.206,0,0,1-3.172-.19,7.043,7.043,0,0,1-2.654-2.929.677.677,0,0,1-.056-.732,1.145,1.145,0,0,1,.7-.524c.764-.192.917.411,1.226.957A9.079,9.079,0,0,0,2728.549,869.47Z"
                            transform="translate(-2708.143 -861.965)"
                            fill="#fe9592"
                          />
                          <path
                            id="Path_4749"
                            data-name="Path 4749"
                            d="M2728.782,884.895a4.284,4.284,0,0,1-1.448-1.022,7.11,7.11,0,0,1-.6-.746c-.178-.251-.34-.513-.519-.764s-.35-.48-.5-.734a2.724,2.724,0,0,1-.256-.527,1.133,1.133,0,0,0-.074.109.677.677,0,0,0,.056.732,7.043,7.043,0,0,0,2.654,2.929,3.826,3.826,0,0,0,2.348.365A4.272,4.272,0,0,1,2728.782,884.895Z"
                            transform="translate(-2708.143 -876.04)"
                            fill="#fb7874"
                          />
                          <path
                            id="Path_4750"
                            data-name="Path 4750"
                            d="M2712.728,853.513c-.3.333-.069,1.017.022,1.263a5.172,5.172,0,0,0,.648,1.121c.551-.312,1.891-1.093,1.891-1.093s-.735-1.967-2.013-1.649A1.2,1.2,0,0,0,2712.728,853.513Z"
                            transform="translate(-2695.821 -848.928)"
                            fill="#7fc29d"
                          />
                          <path
                            id="Path_4751"
                            data-name="Path 4751"
                            d="M2713.873,855.987q-.1-.164-.2-.333c-.068-.12-.134-.241-.195-.365s-.116-.245-.166-.371a2.708,2.708,0,0,1-.116-.355,1.272,1.272,0,0,1-.041-.314.539.539,0,0,1,.057-.248.352.352,0,0,1,.12-.123l-.057.011a1.2,1.2,0,0,0-.548.359c-.3.333-.069,1.017.022,1.263a5.173,5.173,0,0,0,.648,1.121c.165-.093.4-.229.65-.373Q2713.958,856.124,2713.873,855.987Z"
                            transform="translate(-2695.821 -849.663)"
                            fill="#5bb182"
                          />
                          <g
                            id="Group_918"
                            data-name="Group 918"
                            transform="translate(17.913 0)"
                          >
                            <path
                              id="Path_4752"
                              data-name="Path 4752"
                              d="M2859.151,780.039a.841.841,0,0,0,.028.154C2859.173,780.142,2859.163,780.09,2859.151,780.039Z"
                              transform="translate(-2855.747 -778.119)"
                              fill="#fe9592"
                            />
                            <path
                              id="Path_4753"
                              data-name="Path 4753"
                              d="M2755.641,721.766a.183.183,0,0,1-.086.115,1.077,1.077,0,0,1-.186.108,1.433,1.433,0,0,1-.771,1.025,2.15,2.15,0,1,1,.58-2.556,2.656,2.656,0,0,1,.188.561.818.818,0,0,0,.028.154,1.446,1.446,0,0,0,.192.461A.2.2,0,0,1,2755.641,721.766Z"
                              transform="translate(-2751.962 -719.098)"
                              fill="#fe9592"
                            />
                            <path
                              id="Path_4754"
                              data-name="Path 4754"
                              d="M2859.151,780.039a.841.841,0,0,0,.028.154C2859.173,780.142,2859.163,780.09,2859.151,780.039Z"
                              transform="translate(-2855.747 -778.119)"
                              fill="#fe9592"
                            />
                            <path
                              id="Path_4755"
                              data-name="Path 4755"
                              d="M2760.151,761.168a.792.792,0,0,1-.37.421,3.122,3.122,0,0,1-1.924.488.925.925,0,0,0,.053.309.556.556,0,0,0-.247-.065.168.168,0,0,0-.083.322c.077.044.2.018.214.113.009.069-.081.162-.125.209a.826.826,0,0,1-.208.163c-.051.028-.18.044-.215.08a.153.153,0,0,0,.042-.124.522.522,0,0,1-.4.192l.08-.094a.671.671,0,0,1-.379.2.631.631,0,0,0,.082-.477c-.029-.155-.145-.3-.159-.455a.654.654,0,0,1,.134-.4,1.116,1.116,0,0,1,.368-.3,4.058,4.058,0,0,1,1.219-.377q.538-.1,1.081-.182a1.169,1.169,0,0,1,.373,0A1.763,1.763,0,0,0,2760.151,761.168Z"
                              transform="translate(-2756.302 -759.834)"
                              fill="#03277d"
                            />
                            <g id="Group_916" data-name="Group 916">
                              <path
                                id="Path_4756"
                                data-name="Path 4756"
                                d="M2757.083,744.472s4.027-.947,4.191-1.7c.038-.171-1.356.283-1.356.283Z"
                                transform="translate(-2756.853 -741.978)"
                                fill="#ea8e0a"
                              />
                              <path
                                id="Path_4757"
                                data-name="Path 4757"
                                d="M2750.574,718.438c-1.071.476-1.026,1.369-.666,2.352l2.836-1.412C2752.22,718.522,2751.468,718.04,2750.574,718.438Z"
                                transform="translate(-2749.678 -718.297)"
                                fill="#fdb702"
                              />
                              <path
                                id="Path_4758"
                                data-name="Path 4758"
                                d="M2749.986,736.438a1.873,1.873,0,0,0-.067,1.93l.209-.1A2.054,2.054,0,0,1,2749.986,736.438Z"
                                transform="translate(-2749.689 -735.874)"
                                fill="#fd9f02"
                              />
                            </g>
                            <g
                              id="Group_917"
                              data-name="Group 917"
                              transform="translate(3.339 2.638)"
                            >
                              <path
                                id="Path_4759"
                                data-name="Path 4759"
                                d="M2857.427,803.187a.106.106,0,0,0,0-.029.3.3,0,0,1-.208.124.29.29,0,0,0-.088.014.061.061,0,0,0-.038.072c.01.025.042.034.069.038h0a1.084,1.084,0,0,0,.179-.1A.185.185,0,0,0,2857.427,803.187Z"
                                transform="translate(-2857.087 -803.158)"
                                fill="#fb7874"
                              />
                            </g>
                            <path
                              id="Path_4760"
                              data-name="Path 4760"
                              d="M2813.242,806.648a.15.15,0,0,0-.02.146.28.28,0,0,0,.094.119.5.5,0,0,0,.176.089.143.143,0,0,0,.149-.024.1.1,0,0,0,.019-.083.208.208,0,0,0-.035-.08C2813.568,806.73,2813.344,806.527,2813.242,806.648Z"
                              transform="translate(-2811.237 -803.865)"
                              fill="#fb7874"
                            />
                          </g>
                          <path
                            id="Path_4761"
                            data-name="Path 4761"
                            d="M2785.7,1314.879c.051.02.11.047.12.1a.108.108,0,0,1-.077.112.3.3,0,0,1-.146,0,5.76,5.76,0,0,1-2.027-.7.362.362,0,0,1-.2-.406c.014-.054.312-.456.358-.422.341.246.739.442,1.064.7A3.465,3.465,0,0,0,2785.7,1314.879Z"
                            transform="translate(-2764.398 -1295.059)"
                            fill="#03277d"
                          />
                          <path
                            id="Path_4762"
                            data-name="Path 4762"
                            d="M2224.024,867.027h-9.862a.226.226,0,0,1-.226-.226h0a.226.226,0,0,1,.226-.226h9.862a.226.226,0,0,1,.226.226h0A.226.226,0,0,1,2224.024,867.027Z"
                            transform="translate(-2212.68 -861.965)"
                            fill="#cddbfe"
                            opacity="0.65"
                          />
                          <g
                            id="Group_920"
                            data-name="Group 920"
                            transform="translate(19.423 2.253)"
                          >
                            <path
                              id="Path_4763"
                              data-name="Path 4763"
                              d="M2810.66,790.854a4.042,4.042,0,0,1-.559.251,1.2,1.2,0,0,1-.6.053c-.056-.011-.126-.024-.16.022a.137.137,0,0,0-.02.076,1.659,1.659,0,0,0,.3,1.023.481.481,0,0,0,.332.238.51.51,0,0,0,.292-.1,3.024,3.024,0,0,0,.482-.368,1.332,1.332,0,0,0,.4-.589.694.694,0,0,0-.04-.492.435.435,0,0,0-.135-.176C2810.858,790.751,2810.734,790.817,2810.66,790.854Z"
                              transform="translate(-2808.969 -790.779)"
                              fill="#4f94f9"
                            />
                            <path
                              id="Path_4764"
                              data-name="Path 4764"
                              d="M2815.594,833.594a1.665,1.665,0,0,0,.1.169.482.482,0,0,0,.332.238.51.51,0,0,0,.292-.1c.012-.007.022-.016.034-.023A1.061,1.061,0,0,1,2815.594,833.594Z"
                              transform="translate(-2815.054 -832.263)"
                              fill="#4a87da"
                            />
                            <g
                              id="Group_919"
                              data-name="Group 919"
                              transform="translate(0 0.255)"
                            >
                              <path
                                id="Path_4765"
                                data-name="Path 4765"
                                d="M2798.7,799.218a.128.128,0,0,1-.043-.011c-.029-.011-.385-.2-.411-.225a.648.648,0,0,1,.13.007.438.438,0,0,1,.117.05c.057.028.113.055.17.081a.585.585,0,0,1,.065.078C2798.717,799.21,2798.712,799.218,2798.7,799.218Z"
                                transform="translate(-2798.242 -798.981)"
                                fill="#4f94f9"
                              />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                    {t("home_collection_ph")}
                  </span>
                  </Link>
                </li>
                <li className="getstart drp mob-drp ml-3">
                  <p className="email_only_head">
                    <img src="/assets/img/email-only.svg" className="co_icon" alt="email-img" />
                  
                    <Link
                      className="__hyperlinks"
                      href="mailto:life@oncquestlabs.com"
                    >
                      life@oncquestlabs.com
                    </Link>
                  </p>
                </li>
                <li className="getstart text-center">
                  <div className="dropdown drp mob-drp" ref={anchorRef1}>
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      data-toggle="dropdown"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                      >
                        <g
                          id="Group_926"
                          data-name="Group 926"
                          transform="translate(-1518.255 -11)"
                        >
                          <g id="Group_925" data-name="Group 925">
                            <g
                              id="Group_924"
                              data-name="Group 924"
                              transform="translate(1179.256 -327.999)"
                            >
                              <g
                                id="Layer_1"
                                data-name="Layer 1"
                                transform="translate(338.999 338.999)"
                              >
                                <path
                                  id="Path_4766"
                                  data-name="Path 4766"
                                  d="M366,352.5A13.5,13.5,0,1,1,352.5,339,13.54,13.54,0,0,1,366,352.5Z"
                                  transform="translate(-338.999 -338.999)"
                                  fill="#ffcc5c"
                                />
                              </g>
                              <g
                                id="Layer_7"
                                data-name="Layer 7"
                                transform="translate(343.286 344.626)"
                              >
                                <g
                                  id="Group_923"
                                  data-name="Group 923"
                                  transform="translate(0 0)"
                                >
                                  <path
                                    id="Path_4767"
                                    data-name="Path 4767"
                                    d="M380.5,392.523l-2.093-1.908v-2.4h4.186v2.4Z"
                                    transform="translate(-371.253 -379.553)"
                                    fill="#eaad8c"
                                  />
                                  <path
                                    id="Path_4768"
                                    data-name="Path 4768"
                                    d="M378.407,389.285a2.392,2.392,0,0,0,4.186,0v-1.071h-4.186Z"
                                    transform="translate(-371.253 -379.553)"
                                    fill="#d89273"
                                  />
                                  <path
                                    id="Path_4769"
                                    data-name="Path 4769"
                                    d="M372.234,364.368c-.021-.594.435-.179.435-.179s-.8-4.918,3.448-4.918c4.311,0,3.45,4.918,3.45,4.918s.456-.415.437.179a3.928,3.928,0,0,1-.159,1.01,1.333,1.333,0,0,1-.694,1.011,3.42,3.42,0,0,1-.614,1.684c-.5.5-1.288,1.626-2.419,1.587-1.129.039-1.923-1.09-2.418-1.587a3.418,3.418,0,0,1-.614-1.684,1.336,1.336,0,0,1-.694-1.011A3.924,3.924,0,0,1,372.234,364.368Z"
                                    transform="translate(-366.872 -359.012)"
                                    fill="#f4bd9a"
                                  />
                                  <path
                                    id="Path_4770"
                                    data-name="Path 4770"
                                    d="M365.115,407.374c3.8,0,5.875-.331,8.364-2.829,0,0-.005-2.5-.045-2.616-.059-.179-.238-.634-.516-.714s-4.261-1.685-4.876-1.943l-2.856.73-2.892-.73c-.615.258-4.6,1.863-4.876,1.943s-.456.535-.516.714c-.041.121-.1,2.084-.1,2.616C359.286,406.993,361.352,407.374,365.115,407.374Z"
                                    transform="translate(-355.921 -387.401)"
                                    fill="#fff"
                                  />
                                  <path
                                    id="Path_4771"
                                    data-name="Path 4771"
                                    d="M377.841,398.094l-1.279,1.8-1.567-2.705.891-.971Zm.473,0,1.28,1.8,1.567-2.706-.9-.971Z"
                                    transform="translate(-368.831 -385.232)"
                                    fill="#d3cdcd"
                                  />
                                  <path
                                    id="Path_4772"
                                    data-name="Path 4772"
                                    d="M384.121,402.1l-.357-.515a.216.216,0,0,0-.136-.057h-.792a.221.221,0,0,0-.136.057l-.356.515a.209.209,0,0,0-.064.262c.106.334.467.48.53.759,0,0-.217,3.147-.431,5.959-.064.846,1.767.82,1.7-.033-.216-2.791-.435-5.89-.435-5.89.063-.279.435-.46.542-.795A.211.211,0,0,0,384.121,402.1Z"
                                    transform="translate(-373.986 -388.999)"
                                    fill="#c93939"
                                  />
                                  <path
                                    id="Path_4773"
                                    data-name="Path 4773"
                                    d="M377.616,396.937l-1.279,1.8-1.659-2.51.983-1.167Zm.473,0,1.28,1.8,1.66-2.51-1-1.167Z"
                                    transform="translate(-368.606 -384.411)"
                                    fill="#fff"
                                  />
                                  <path
                                    id="Path_4774"
                                    data-name="Path 4774"
                                    d="M377.055,359.446c-3.382,0-3.619,3.186-3.532,4.156.059.661.431,1,.426.845a3.187,3.187,0,0,1,.553-2.17c.5-.507,1.323.069,2.437.069,1.188,0,2.1-.688,2.642-.074a3.272,3.272,0,0,1,.531,2.082c.006.152.289-.112.348-.773C380.549,362.611,380.363,359.446,377.055,359.446Z"
                                    transform="translate(-367.777 -359.137)"
                                    fill="#d39572"
                                  />
                                  <path
                                    id="Path_4775"
                                    data-name="Path 4775"
                                    d="M376.524,358.38c-3.684,0-3.682,3.326-3.6,4.271a3.751,3.751,0,0,0,.226,1.214c.138.347.247.477.28.573.133.393.159-.433.188-.577.369-1.781,3.695-1.079,4.951-2.468a7.182,7.182,0,0,0,1.007,2.3c.073.128.1,1.014.2.746a6.2,6.2,0,0,0,.279-.573,4.517,4.517,0,0,0,.208-1.3C380.354,361.615,380.207,358.38,376.524,358.38Z"
                                    transform="translate(-367.349 -358.38)"
                                    fill="#634335"
                                  />
                                  <path
                                    id="Path_4776"
                                    data-name="Path 4776"
                                    d="M362.977,407.871a13.444,13.444,0,0,0,9.25-3.7c-.4-1.569-.921-3.619-.95-3.707-.059-.179-.238-.634-.516-.714-.237-.068-3.078-1.252-4.395-1.754l-3.38,5.948-3.374-5.931c-1.344.512-4.117,1.671-4.352,1.737-.278.08-.456.535-.516.714-.03.089-.572,2.134-.98,3.743A13.445,13.445,0,0,0,362.977,407.871Z"
                                    transform="translate(-353.764 -386.498)"
                                    fill="#3b93e9"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span className="ml-2 mr-1">
                        {LoggedIn()
                          ? `${
                              getUser().FirstName
                                ? "Hello, " + getUser().FirstName
                                : ""
                            }`
                          : t("Login")}
                      </span>
                      <i
                        className={
                          anchor1 ? "fa fa-angle-up" : "fa fa-angle-down"
                        }
                      ></i>
                    </button>
                    {/*  {anchor1 &&  */}
                    <div className="dropdown-menu menu__">
                      {!LoggedIn() ? (
                        <>
                          <div>
                            <Link
                              href="https://lis.oncquest.net/labmateonline_7001/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {" "}
                              {t("lis_login")}
                            </Link>
                          </div>
                          <hr />
                          <div>
                            {" "}
                            <a
                              href="https://lis.oncquest.net/labmatefranchises_7001/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t("franchise_login")}
                            </a>
                          </div>
                          <hr />
                          <div>
                            <a
                              href="https://itd.oncquest.net/Oncquest/Design/onlinelab/"
                              target="_blank"
                              rel="noopener noreferrer"
                              title=""
                            >
                              {t("report")}
                            </a>
                          </div>
                          <hr />
                          <div>
                            <a
                              href="https://admin.oncquestlabs.com/search-tests"
                              target="_blank"
                              title=""
                              rel="noopener noreferrer"
                            >
                              {t("range")}
                            </a>
                          </div>
                        </>
                      ) : (
                        <>
                          <div>
                            <a
                              href="https://lis.oncquest.net/labmateonline_7001/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t("lis_login")}
                            </a>
                          </div>
                          <hr />
                          <div>
                            {" "}
                            <a
                              href="https://lis.oncquest.net/labmatefranchises_7001/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {t("franchise_login")}
                            </a>
                          </div>
                          <hr />
                          <div>
                            <a
                              href="https://itd.oncquest.net/Oncquest/Design/onlinelab/"
                              target="_blank"
                              rel="noopener noreferrer"
                              title=""
                            >
                              {t("report")}
                            </a>
                          </div>
                          <hr />
                          <div>
                            <a
                              href="https://admin.oncquestlabs.com/search-tests"
                              target="_blank"
                              rel="noopener noreferrer"
                              title=""
                            >
                              {t("range")}
                            </a>
                          </div>
                          <hr />
                          <div>
                            <div
                              className="divlink"
                              onClick={(e: any) => logout(e)}
                            >
                              <i
                                className="fa fa-sign-out fa-x mr-1"
                                aria-hidden="true"
                              ></i>
                              {t("log_out")}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    {/*  } */}
                  </div>
                </li>
              </ul>
              <div
                className="zeynep-overlay"
                id="zeynepOpen"
                onClick={() => removeClass()}
              ></div>
              <div className="bg-white mainnav">
                <div className="mainnavsmall" onClick={() => addClass()}>
                  <img src="../assets/img/nav-mobile.png" alt="" />
                </div>
                <nav className="primary-nav" id="openTab">
                  <div
                    className="primary-navclose"
                    onClick={() => removeClass()}
                  >
                    x
                  </div>
                  <ul id="menu-main" className="menu">
                    <li className="getstart mob-collect-h">
                      <Link  href="tel: 0124-6650000" passHref legacyBehavior>
                      <span
                       
                      
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="35.045"
                          height="28.875"
                          viewBox="0 0 35.045 28.875"
                        >
                          <g
                            id="Group_922"
                            data-name="Group 922"
                            transform="translate(-2173.523 -718.297)"
                          >
                            <g
                              id="Group_921"
                              data-name="Group 921"
                              transform="translate(2173.523 718.297)"
                            >
                              <path
                                id="Path_4732"
                                data-name="Path 4732"
                                d="M2772.343,1121.855c.428.11,1.114.275,1.2,1.079a3.343,3.343,0,0,1-.378,1.514,16.1,16.1,0,0,1-1.588,2.422l.087.061a.565.565,0,0,0-.3.436.9.9,0,0,0,.245.679.283.283,0,0,0,.254.1.357.357,0,0,0,.167-.126,12.435,12.435,0,0,0,1.883-2.845,4.913,4.913,0,0,0,.494-1.5,2.241,2.241,0,0,0-.312-1.522,2.993,2.993,0,0,0-1.925-1.051Z"
                                transform="translate(-2752.766 -1108.57)"
                                fill="#03277d"
                              />
                              <g
                                id="Group_900"
                                data-name="Group 900"
                                transform="translate(0 3.98)"
                              >
                                <rect
                                  id="Rectangle_641"
                                  data-name="Rectangle 641"
                                  width="11.757"
                                  height="10.473"
                                  rx="5.236"
                                  fill="#1765cf"
                                />
                                <rect
                                  id="Rectangle_642"
                                  data-name="Rectangle 642"
                                  width="11.757"
                                  height="10.473"
                                  rx="5.236"
                                  transform="translate(0.633)"
                                  fill="#4f94f9"
                                />
                              </g>
                              <g
                                id="Group_901"
                                data-name="Group 901"
                                transform="translate(4.284 14.406)"
                              >
                                <line
                                  id="Line_64"
                                  data-name="Line 64"
                                  x2="3.494"
                                  y2="2.63"
                                  transform="translate(1.189)"
                                  fill="none"
                                  stroke="#03277d"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="5.335"
                                />
                                <line
                                  id="Line_65"
                                  data-name="Line 65"
                                  x1="8.106"
                                  fill="none"
                                  stroke="#03277d"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="5.335"
                                />
                              </g>
                              <g
                                id="Group_902"
                                data-name="Group 902"
                                transform="translate(18.174 2.414)"
                              >
                                <rect
                                  id="Rectangle_643"
                                  data-name="Rectangle 643"
                                  width="1.424"
                                  height="2.373"
                                  transform="translate(0.438 0) rotate(10.634)"
                                  fill="#fe9592"
                                />
                                <path
                                  id="Path_4733"
                                  data-name="Path 4733"
                                  d="M2766.877,795.937l-.169.9a5,5,0,0,1,1.141,1.639l.428-2.278Z"
                                  transform="translate(-2766.439 -795.937)"
                                  fill="#fb7874"
                                />
                              </g>
                              <g
                                id="Group_903"
                                data-name="Group 903"
                                transform="translate(14.707 4.01)"
                              >
                                <path
                                  id="Path_4734"
                                  data-name="Path 4734"
                                  d="M2650.925,853.991c.278-1.637.54-2.808.753-4.46a2.223,2.223,0,0,0-1.107-2.15,1.966,1.966,0,0,0-1.6.128,3.653,3.653,0,0,0-1.451,2.055,18.622,18.622,0,0,0-.8,3.239,4.376,4.376,0,0,0-.03,2.139A8.443,8.443,0,0,0,2650.925,853.991Z"
                                  transform="translate(-2646.559 -847.267)"
                                  fill="#70bb92"
                                />
                                <path
                                  id="Path_4735"
                                  data-name="Path 4735"
                                  d="M2735.891,898.986a8.618,8.618,0,0,1-2.376,5.767,8.417,8.417,0,0,0,1.662-.651c.278-1.637.54-2.808.753-4.46A1.98,1.98,0,0,0,2735.891,898.986Z"
                                  transform="translate(-2730.811 -897.378)"
                                  fill="#48956b"
                                />
                                <path
                                  id="Path_4736"
                                  data-name="Path 4736"
                                  d="M2658.6,1064.86a3.865,3.865,0,0,0-2.5-1.5c-.141-.022-1.3-.2-1.328-.022,0-.024.008-.046.012-.07a8.444,8.444,0,0,1-4.242.951,1.826,1.826,0,0,0,.157.347c.722,1.214,2.306,1.034,3.508,1.057.805.015,2.288.015,2.543,1.01a1.921,1.921,0,0,1-.009.819,7.766,7.766,0,0,1-.87,2.258c-.089.165-1.159,2-1.184,1.982l.613.4c.23.149,1.349-1.178,1.485-1.369.471-.659.953-1.325,1.377-2.016a5.122,5.122,0,0,0,.858-2.5A2.263,2.263,0,0,0,2658.6,1064.86Z"
                                  transform="translate(-2650.412 -1056.547)"
                                  fill="#436dd6"
                                />
                                <path
                                  id="Path_4737"
                                  data-name="Path 4737"
                                  d="M2656.95,1095.911c-1.1-1.726-4.571.4-5.925-1.747-.163,0-.326,0-.489,0a1.827,1.827,0,0,0,.157.347c.722,1.214,2.306,1.034,3.508,1.057.805.015,2.288.015,2.543,1.01a1.921,1.921,0,0,1-.009.819,7.766,7.766,0,0,1-.87,2.258c-.089.165-1.159,2-1.184,1.982l.114.074C2656.435,1099.929,2658.272,1098.025,2656.95,1095.911Z"
                                  transform="translate(-2650.412 -1086.483)"
                                  fill="#315fd2"
                                />
                              </g>
                              <g
                                id="Group_911"
                                data-name="Group 911"
                                transform="translate(7.025 6.957)"
                              >
                                <g id="Group_910" data-name="Group 910">
                                  <g
                                    id="Group_904"
                                    data-name="Group 904"
                                    transform="translate(0 10.441)"
                                  >
                                    <circle
                                      id="Ellipse_2038"
                                      data-name="Ellipse 2038"
                                      cx="4.058"
                                      cy="4.058"
                                      r="4.058"
                                      transform="translate(0 5.739) rotate(-45)"
                                      fill="#03277d"
                                    />
                                    <circle
                                      id="Ellipse_2039"
                                      data-name="Ellipse 2039"
                                      cx="2.719"
                                      cy="2.719"
                                      r="2.719"
                                      transform="translate(1.893 5.739) rotate(-45)"
                                      fill="#1765cf"
                                    />
                                    <circle
                                      id="Ellipse_2040"
                                      data-name="Ellipse 2040"
                                      cx="1.114"
                                      cy="1.114"
                                      r="1.114"
                                      transform="translate(4.163 5.739) rotate(-45)"
                                      fill="#b2b2b2"
                                    />
                                  </g>
                                  <g
                                    id="Group_905"
                                    data-name="Group 905"
                                    transform="translate(0.009 2.265)"
                                  >
                                    <path
                                      id="Path_4738"
                                      data-name="Path 4738"
                                      d="M2420.74,1014.923h-2.482a11.406,11.406,0,0,1,.457,6.5c-.271,1.406-1.64,4.425-3.374,4.384-1.487-.035-3.527-.2-4.23-2.1a3.739,3.739,0,0,1,.716-3.992l-6.3,0c-1.519,0-5.282,1.01-5.752,7.151a1.1,1.1,0,0,0,1.113,1.147h18.356l1.458-3.626,2.019.692c.748-.847,2.21,1.1,2.446,0C2426.448,1019.12,2420.74,1014.923,2420.74,1014.923Z"
                                      transform="translate(-2399.776 -1014.923)"
                                      fill="#fdb702"
                                    />
                                  </g>
                                  <path
                                    id="Path_4739"
                                    data-name="Path 4739"
                                    d="M2918.556,1014.923H2916.8a11.406,11.406,0,0,1,.457,6.5c-.248,1.287-1.416,3.89-2.942,4.321C2915.761,1025.646,2920.69,1022.642,2918.556,1014.923Z"
                                    transform="translate(-2898.306 -1012.658)"
                                    fill="#fd9f02"
                                  />
                                  <g
                                    id="Group_908"
                                    data-name="Group 908"
                                    transform="translate(16.543 10.441)"
                                  >
                                    <g
                                      id="Group_906"
                                      data-name="Group 906"
                                      transform="translate(0 0)"
                                    >
                                      <circle
                                        id="Ellipse_2041"
                                        data-name="Ellipse 2041"
                                        cx="4.058"
                                        cy="4.058"
                                        r="4.058"
                                        transform="translate(0 5.739) rotate(-45)"
                                        fill="#03277d"
                                      />
                                      <circle
                                        id="Ellipse_2042"
                                        data-name="Ellipse 2042"
                                        cx="2.719"
                                        cy="2.719"
                                        r="2.719"
                                        transform="translate(1.893 5.739) rotate(-45)"
                                        fill="#1765cf"
                                      />
                                      <circle
                                        id="Ellipse_2043"
                                        data-name="Ellipse 2043"
                                        cx="1.114"
                                        cy="1.114"
                                        r="1.114"
                                        transform="matrix(0.23, -0.973, 0.973, 0.23, 4.398, 6.567)"
                                        fill="#b2b2b2"
                                      />
                                    </g>
                                    <g
                                      id="Group_907"
                                      data-name="Group 907"
                                      transform="translate(1.496 0.933)"
                                    >
                                      <path
                                        id="Path_4740"
                                        data-name="Path 4740"
                                        d="M2987.842,1311.726a.264.264,0,0,0,.414-.278,4.347,4.347,0,0,0-8.54,0,.264.264,0,0,0,.414.278,6.519,6.519,0,0,1,7.712,0Z"
                                        transform="translate(-2979.707 -1307.915)"
                                        fill="#fd9f02"
                                      />
                                    </g>
                                  </g>
                                  <path
                                    id="Path_4741"
                                    data-name="Path 4741"
                                    d="M3085.936,942.263v2.253a1.133,1.133,0,0,0,1.014-1.126h0A1.133,1.133,0,0,0,3085.936,942.263Z"
                                    transform="translate(-3064.594 -942.257)"
                                    fill="#fdb702"
                                  />
                                  <path
                                    id="Path_4742"
                                    data-name="Path 4742"
                                    d="M2980.747,942.06h-2.65a.6.6,0,0,0-.6.6v1.06a.6.6,0,0,0,.6.6h2.65a1.132,1.132,0,0,0,.119-.006v-2.253A1.132,1.132,0,0,0,2980.747,942.06Z"
                                    transform="translate(-2959.523 -942.06)"
                                    fill="#fd9f02"
                                  />
                                  <path
                                    id="Path_4743"
                                    data-name="Path 4743"
                                    d="M2918.528,965.141l-2.629,1.322a.423.423,0,0,1-.38-.756l.024-.011,2.706-1.157a.332.332,0,0,1,.28.6Z"
                                    transform="translate(-2899.25 -963.814)"
                                    fill="#03277d"
                                  />
                                  <g
                                    id="Group_909"
                                    data-name="Group 909"
                                    transform="translate(2.819 8.266)"
                                  >
                                    <path
                                      id="Path_4744"
                                      data-name="Path 4744"
                                      d="M2492.374,1207.918a6.261,6.261,0,0,0-2.234.411c3.144.027,5.769,1.931,6.237,4.964a.88.88,0,0,0,.864.756h.442a.875.875,0,0,0,.855-1.047A6.28,6.28,0,0,0,2492.374,1207.918Z"
                                      transform="translate(-2490.14 -1207.918)"
                                      fill="#fd9f02"
                                    />
                                  </g>
                                </g>
                              </g>
                              <rect
                                id="Rectangle_644"
                                data-name="Rectangle 644"
                                width="8.377"
                                height="1.066"
                                rx="0.533"
                                transform="translate(11.57 13.026)"
                                fill="#03277d"
                              />
                              <g
                                id="Group_915"
                                data-name="Group 915"
                                transform="translate(8.812 18.203)"
                              >
                                <g id="Group_912" data-name="Group 912">
                                  <path
                                    id="Path_4745"
                                    data-name="Path 4745"
                                    d="M2461.857,1304.108H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z"
                                    transform="translate(-2456.948 -1303.796)"
                                    fill="#03277d"
                                  />
                                </g>
                                <g
                                  id="Group_913"
                                  data-name="Group 913"
                                  transform="translate(0 0.93)"
                                >
                                  <path
                                    id="Path_4746"
                                    data-name="Path 4746"
                                    d="M2461.857,1334.026H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z"
                                    transform="translate(-2456.948 -1333.714)"
                                    fill="#03277d"
                                  />
                                </g>
                                <g
                                  id="Group_914"
                                  data-name="Group 914"
                                  transform="translate(0 1.86)"
                                >
                                  <path
                                    id="Path_4747"
                                    data-name="Path 4747"
                                    d="M2461.857,1363.944H2457.1a.156.156,0,0,1,0-.312h4.753a.156.156,0,0,1,0,.312Z"
                                    transform="translate(-2456.948 -1363.632)"
                                    fill="#03277d"
                                  />
                                </g>
                              </g>
                              <path
                                id="Path_4748"
                                data-name="Path 4748"
                                d="M2728.549,869.47a3.836,3.836,0,0,0,1.58.98,1.994,1.994,0,0,0,.881.135c.38-.052.76-.142,1.137-.212a1.4,1.4,0,0,1,.617-.022.422.422,0,0,1,.184.775c-.185.147-.35.3-.581.121a3.015,3.015,0,0,0-.324-.29,1.016,1.016,0,0,0-.778.031,4.206,4.206,0,0,1-3.172-.19,7.043,7.043,0,0,1-2.654-2.929.677.677,0,0,1-.056-.732,1.145,1.145,0,0,1,.7-.524c.764-.192.917.411,1.226.957A9.079,9.079,0,0,0,2728.549,869.47Z"
                                transform="translate(-2708.143 -861.965)"
                                fill="#fe9592"
                              />
                              <path
                                id="Path_4749"
                                data-name="Path 4749"
                                d="M2728.782,884.895a4.284,4.284,0,0,1-1.448-1.022,7.11,7.11,0,0,1-.6-.746c-.178-.251-.34-.513-.519-.764s-.35-.48-.5-.734a2.724,2.724,0,0,1-.256-.527,1.133,1.133,0,0,0-.074.109.677.677,0,0,0,.056.732,7.043,7.043,0,0,0,2.654,2.929,3.826,3.826,0,0,0,2.348.365A4.272,4.272,0,0,1,2728.782,884.895Z"
                                transform="translate(-2708.143 -876.04)"
                                fill="#fb7874"
                              />
                              <path
                                id="Path_4750"
                                data-name="Path 4750"
                                d="M2712.728,853.513c-.3.333-.069,1.017.022,1.263a5.172,5.172,0,0,0,.648,1.121c.551-.312,1.891-1.093,1.891-1.093s-.735-1.967-2.013-1.649A1.2,1.2,0,0,0,2712.728,853.513Z"
                                transform="translate(-2695.821 -848.928)"
                                fill="#7fc29d"
                              />
                              <path
                                id="Path_4751"
                                data-name="Path 4751"
                                d="M2713.873,855.987q-.1-.164-.2-.333c-.068-.12-.134-.241-.195-.365s-.116-.245-.166-.371a2.708,2.708,0,0,1-.116-.355,1.272,1.272,0,0,1-.041-.314.539.539,0,0,1,.057-.248.352.352,0,0,1,.12-.123l-.057.011a1.2,1.2,0,0,0-.548.359c-.3.333-.069,1.017.022,1.263a5.173,5.173,0,0,0,.648,1.121c.165-.093.4-.229.65-.373Q2713.958,856.124,2713.873,855.987Z"
                                transform="translate(-2695.821 -849.663)"
                                fill="#5bb182"
                              />
                              <g
                                id="Group_918"
                                data-name="Group 918"
                                transform="translate(17.913 0)"
                              >
                                <path
                                  id="Path_4752"
                                  data-name="Path 4752"
                                  d="M2859.151,780.039a.841.841,0,0,0,.028.154C2859.173,780.142,2859.163,780.09,2859.151,780.039Z"
                                  transform="translate(-2855.747 -778.119)"
                                  fill="#fe9592"
                                />
                                <path
                                  id="Path_4753"
                                  data-name="Path 4753"
                                  d="M2755.641,721.766a.183.183,0,0,1-.086.115,1.077,1.077,0,0,1-.186.108,1.433,1.433,0,0,1-.771,1.025,2.15,2.15,0,1,1,.58-2.556,2.656,2.656,0,0,1,.188.561.818.818,0,0,0,.028.154,1.446,1.446,0,0,0,.192.461A.2.2,0,0,1,2755.641,721.766Z"
                                  transform="translate(-2751.962 -719.098)"
                                  fill="#fe9592"
                                />
                                <path
                                  id="Path_4754"
                                  data-name="Path 4754"
                                  d="M2859.151,780.039a.841.841,0,0,0,.028.154C2859.173,780.142,2859.163,780.09,2859.151,780.039Z"
                                  transform="translate(-2855.747 -778.119)"
                                  fill="#fe9592"
                                />
                                <path
                                  id="Path_4755"
                                  data-name="Path 4755"
                                  d="M2760.151,761.168a.792.792,0,0,1-.37.421,3.122,3.122,0,0,1-1.924.488.925.925,0,0,0,.053.309.556.556,0,0,0-.247-.065.168.168,0,0,0-.083.322c.077.044.2.018.214.113.009.069-.081.162-.125.209a.826.826,0,0,1-.208.163c-.051.028-.18.044-.215.08a.153.153,0,0,0,.042-.124.522.522,0,0,1-.4.192l.08-.094a.671.671,0,0,1-.379.2.631.631,0,0,0,.082-.477c-.029-.155-.145-.3-.159-.455a.654.654,0,0,1,.134-.4,1.116,1.116,0,0,1,.368-.3,4.058,4.058,0,0,1,1.219-.377q.538-.1,1.081-.182a1.169,1.169,0,0,1,.373,0A1.763,1.763,0,0,0,2760.151,761.168Z"
                                  transform="translate(-2756.302 -759.834)"
                                  fill="#03277d"
                                />
                                <g id="Group_916" data-name="Group 916">
                                  <path
                                    id="Path_4756"
                                    data-name="Path 4756"
                                    d="M2757.083,744.472s4.027-.947,4.191-1.7c.038-.171-1.356.283-1.356.283Z"
                                    transform="translate(-2756.853 -741.978)"
                                    fill="#ea8e0a"
                                  />
                                  <path
                                    id="Path_4757"
                                    data-name="Path 4757"
                                    d="M2750.574,718.438c-1.071.476-1.026,1.369-.666,2.352l2.836-1.412C2752.22,718.522,2751.468,718.04,2750.574,718.438Z"
                                    transform="translate(-2749.678 -718.297)"
                                    fill="#fdb702"
                                  />
                                  <path
                                    id="Path_4758"
                                    data-name="Path 4758"
                                    d="M2749.986,736.438a1.873,1.873,0,0,0-.067,1.93l.209-.1A2.054,2.054,0,0,1,2749.986,736.438Z"
                                    transform="translate(-2749.689 -735.874)"
                                    fill="#fd9f02"
                                  />
                                </g>
                                <g
                                  id="Group_917"
                                  data-name="Group 917"
                                  transform="translate(3.339 2.638)"
                                >
                                  <path
                                    id="Path_4759"
                                    data-name="Path 4759"
                                    d="M2857.427,803.187a.106.106,0,0,0,0-.029.3.3,0,0,1-.208.124.29.29,0,0,0-.088.014.061.061,0,0,0-.038.072c.01.025.042.034.069.038h0a1.084,1.084,0,0,0,.179-.1A.185.185,0,0,0,2857.427,803.187Z"
                                    transform="translate(-2857.087 -803.158)"
                                    fill="#fb7874"
                                  />
                                </g>
                                <path
                                  id="Path_4760"
                                  data-name="Path 4760"
                                  d="M2813.242,806.648a.15.15,0,0,0-.02.146.28.28,0,0,0,.094.119.5.5,0,0,0,.176.089.143.143,0,0,0,.149-.024.1.1,0,0,0,.019-.083.208.208,0,0,0-.035-.08C2813.568,806.73,2813.344,806.527,2813.242,806.648Z"
                                  transform="translate(-2811.237 -803.865)"
                                  fill="#fb7874"
                                />
                              </g>
                              <path
                                id="Path_4761"
                                data-name="Path 4761"
                                d="M2785.7,1314.879c.051.02.11.047.12.1a.108.108,0,0,1-.077.112.3.3,0,0,1-.146,0,5.76,5.76,0,0,1-2.027-.7.362.362,0,0,1-.2-.406c.014-.054.312-.456.358-.422.341.246.739.442,1.064.7A3.465,3.465,0,0,0,2785.7,1314.879Z"
                                transform="translate(-2764.398 -1295.059)"
                                fill="#03277d"
                              />
                              <path
                                id="Path_4762"
                                data-name="Path 4762"
                                d="M2224.024,867.027h-9.862a.226.226,0,0,1-.226-.226h0a.226.226,0,0,1,.226-.226h9.862a.226.226,0,0,1,.226.226h0A.226.226,0,0,1,2224.024,867.027Z"
                                transform="translate(-2212.68 -861.965)"
                                fill="#cddbfe"
                                opacity="0.65"
                              />
                              <g
                                id="Group_920"
                                data-name="Group 920"
                                transform="translate(19.423 2.253)"
                              >
                                <path
                                  id="Path_4763"
                                  data-name="Path 4763"
                                  d="M2810.66,790.854a4.042,4.042,0,0,1-.559.251,1.2,1.2,0,0,1-.6.053c-.056-.011-.126-.024-.16.022a.137.137,0,0,0-.02.076,1.659,1.659,0,0,0,.3,1.023.481.481,0,0,0,.332.238.51.51,0,0,0,.292-.1,3.024,3.024,0,0,0,.482-.368,1.332,1.332,0,0,0,.4-.589.694.694,0,0,0-.04-.492.435.435,0,0,0-.135-.176C2810.858,790.751,2810.734,790.817,2810.66,790.854Z"
                                  transform="translate(-2808.969 -790.779)"
                                  fill="#4f94f9"
                                />
                                <path
                                  id="Path_4764"
                                  data-name="Path 4764"
                                  d="M2815.594,833.594a1.665,1.665,0,0,0,.1.169.482.482,0,0,0,.332.238.51.51,0,0,0,.292-.1c.012-.007.022-.016.034-.023A1.061,1.061,0,0,1,2815.594,833.594Z"
                                  transform="translate(-2815.054 -832.263)"
                                  fill="#4a87da"
                                />
                                <g
                                  id="Group_919"
                                  data-name="Group 919"
                                  transform="translate(0 0.255)"
                                >
                                  <path
                                    id="Path_4765"
                                    data-name="Path 4765"
                                    d="M2798.7,799.218a.128.128,0,0,1-.043-.011c-.029-.011-.385-.2-.411-.225a.648.648,0,0,1,.13.007.438.438,0,0,1,.117.05c.057.028.113.055.17.081a.585.585,0,0,1,.065.078C2798.717,799.21,2798.712,799.218,2798.7,799.218Z"
                                    transform="translate(-2798.242 -798.981)"
                                    fill="#4f94f9"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </svg>
                        {t("home_collection_ph")}
                      </span>
                      </Link>
                    </li>
                    <li className="getstart" id="desktopHide">
                      <p className="email_only_head">
                        <img
                          src="/assets/img/email-only.svg"
                          className="co_icon"
                        />
                        <Link
                          className="__hyperlinks"
                          href="mailto:life@oncquestlabs.com"
                        >
                          life@oncquestlabs.com
                        </Link>
                      </p>
                    </li>
                    <li className="getstart drp" id="desktopHide">
                       <LanguageSelectMobile onClick={(e: any) => removeClass()}/>
                    </li>
                    <li className="current-menu-parent">
                      <div
                        className={
                          locale === "ta"
                            ? "tamil-class h_dropdown"
                            : "h_dropdown"
                        }
                      >
                        <span>
                          {t("patient")}
                          <i className="fa fa-angle-down fa-xs ml-2"></i>
                        </span>
                        <div className="h_dropdown-menu">
                          <div>
                            <Link
                              href={{
                                pathname: ROUTE.BOOKATEST,
                                query: {
                                  tabs: "tests",
                                  categoryId: "",
                                  subCategoryId: "",
                                },
                              }}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("test_book")}{" "}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={ROUTE.OFFER}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("disc")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={ROUTE.PRIVILEGEMEMBERSHIP}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("privilege_membership_card")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={{
                                pathname: ROUTE.CENTER,
                                query: { nearBy: true },
                              }}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("center")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={{
                                pathname: ROUTE.BOOKATEST,
                                query: {
                                  tabs: "packages",
                                  categoryId: "",
                                  subCategoryId: "",
                                },
                              }}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("package")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={ROUTE.HOMECOLLECTION}
                              onClick={() => removeClass()}
                              passHref
                            >
                              {t("query_form")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={{
                                pathname: ROUTE.TESTIMONIAL,
                                query: { type: 1 },
                              }}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("testi")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={ROUTE.FAQ}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("faq")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={ROUTE.QUICKLINKS}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("quick_link")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className={
                          locale === "ta"
                            ? "tamil-class h_dropdown"
                            : "h_dropdown"
                        }
                      >
                        <span>
                          {t("doctors")}
                          <i className="fa fa-angle-down fa-xs ml-2"></i>
                        </span>
                        <div className="h_dropdown-menu">
                          <div>
                            <Link
                              href={ROUTE.DEPARTMENT}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("department")}{" "}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={ROUTE.BROCHURES}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("brochures")}{" "}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={ROUTE.NEWSANDUPDATES}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("event")}{" "}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={ROUTE.PRIVILEGEMEMBERSHIPDOCTOR}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("privilege_membership_card_doctor")}{" "}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          
                          <div>
                            <Link
                              href={{
                                pathname: ROUTE.TESTIMONIAL,
                                query: { type: 2 },
                              }}
                              onClick={(e: any) => removeClass()}
                              passHref
                            >
                              {t("testi")}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div
                        className={
                          locale === "ta"
                            ? "tamil-class h_dropdown"
                            : "h_dropdown"
                        }
                      >
                        <span>
                          {t("wellness")}
                          <i className="fa fa-angle-down fa-xs ml-2"></i>
                        </span>
                        <div className="h_dropdown-menu">
                          <div>
                            <Link
                              href={ROUTE.PREVENTIVEHEALTHPKJ}
                              onClick={(e) => removeClass()}
                              passHref
                            >
                              {" "}
                              {t("health")}{" "}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <Link
                              href={ROUTE.VIDEOSECTION}
                              onClick={(e) => removeClass()}
                              passHref
                            >
                              {" "}
                              {t("videos")}{" "}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </Link>
                          </div>
                          <hr />
                          <div>
                            <a
                              href="https://oncquestlabs.com/blog/"
                              target="_blank"
                              onClick={(e: any) => {
                                e.preventDefault();
                                window.open(
                                  "https://oncquestlabs.com/blog/",
                                  "_blank"
                                );
                              }}
                            >
                              {t("blog")}{" "}
                              <i
                                className="fa fa-long-arrow-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link
                        href={ROUTE.CENTER}
                        className={
                          locale === "ta"
                            ? "tamil-class h_dropdown"
                            : "h_dropdown"
                        }
                        onClick={(e) => removeClass()}
                        passHref
                      >
                        <span> {t("network")}</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={ROUTE.UPLOADPRESCRIPTION}
                        className={
                          locale === "ta"
                            ? "tamil-class h_dropdown"
                            : "h_dropdown"
                        }
                        onClick={(e) => removeClass()}
                        passHref
                      >
                        <span>{t("upload_prescription")}</span>
                      </Link>
                    </li>
                    <li className="getstart">
                      <div className="fields-wrp">
                        <form action="#">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36.203"
                            height="36.145"
                            viewBox="0 0 44.203 43.145"
                          >
                            <g
                              id="Group_934"
                              data-name="Group 934"
                              transform="translate(-528.182 -383.968)"
                            >
                              <g
                                id="Group_927"
                                data-name="Group 927"
                                transform="translate(528.182 397.435)"
                              >
                                <path
                                  id="Path_4777"
                                  data-name="Path 4777"
                                  d="M550.014,415.9h7.421v27.389H530.682V415.9H538.1"
                                  transform="translate(-529.538 -414.76)"
                                  fill="#99bed9"
                                />
                                <path
                                  id="Path_4778"
                                  data-name="Path 4778"
                                  d="M556.079,443.081H529.326a1.144,1.144,0,0,1-1.144-1.144v-27.39a1.144,1.144,0,0,1,1.144-1.144h7.417a1.144,1.144,0,1,1,0,2.288H530.47v25.1h24.465v-25.1h-6.277a1.144,1.144,0,1,1,0-2.288h7.421a1.144,1.144,0,0,1,1.144,1.144v27.39A1.144,1.144,0,0,1,556.079,443.081Z"
                                  transform="translate(-528.182 -413.404)"
                                  fill="#464c54"
                                />
                              </g>
                              <g
                                id="Group_929"
                                data-name="Group 929"
                                transform="translate(537.376 406.753)"
                              >
                                <g
                                  id="Group_928"
                                  data-name="Group 928"
                                  transform="translate(0 0)"
                                >
                                  <path
                                    id="Path_4779"
                                    data-name="Path 4779"
                                    d="M549.421,437.067a1.144,1.144,0,0,1-1.144-1.144v-1.009a1.144,1.144,0,0,1,2.288,0v1.009A1.144,1.144,0,0,1,549.421,437.067Z"
                                    transform="translate(-548.277 -433.771)"
                                    fill="#464c54"
                                  />
                                  <path
                                    id="Path_4780"
                                    data-name="Path 4780"
                                    d="M549.421,450.605a1.144,1.144,0,0,1-1.144-1.144v-1.633a1.144,1.144,0,1,1,2.288,0v1.633A1.144,1.144,0,0,1,549.421,450.605Z"
                                    transform="translate(-548.277 -440.777)"
                                    fill="#464c54"
                                  />
                                  <path
                                    id="Path_4781"
                                    data-name="Path 4781"
                                    d="M549.421,464.261a1.144,1.144,0,0,1-1.144-1.144v-1.009a1.144,1.144,0,0,1,2.288,0v1.009A1.144,1.144,0,0,1,549.421,464.261Z"
                                    transform="translate(-548.277 -448.523)"
                                    fill="#464c54"
                                  />
                                </g>
                              </g>
                              <g
                                id="Group_931"
                                data-name="Group 931"
                                transform="translate(545.737 406.753)"
                              >
                                <g
                                  id="Group_930"
                                  data-name="Group 930"
                                  transform="translate(0 0)"
                                >
                                  <path
                                    id="Path_4782"
                                    data-name="Path 4782"
                                    d="M567.7,437.067a1.144,1.144,0,0,1-1.144-1.144v-1.009a1.144,1.144,0,0,1,2.288,0v1.009A1.144,1.144,0,0,1,567.7,437.067Z"
                                    transform="translate(-566.553 -433.771)"
                                    fill="#464c54"
                                  />
                                  <path
                                    id="Path_4783"
                                    data-name="Path 4783"
                                    d="M567.7,450.605a1.144,1.144,0,0,1-1.144-1.144v-1.633a1.144,1.144,0,1,1,2.288,0v1.633A1.144,1.144,0,0,1,567.7,450.605Z"
                                    transform="translate(-566.553 -440.777)"
                                    fill="#464c54"
                                  />
                                  <path
                                    id="Path_4784"
                                    data-name="Path 4784"
                                    d="M567.7,464.261a1.144,1.144,0,0,1-1.144-1.144v-1.009a1.144,1.144,0,0,1,2.288,0v1.009A1.144,1.144,0,0,1,567.7,464.261Z"
                                    transform="translate(-566.553 -448.523)"
                                    fill="#464c54"
                                  />
                                </g>
                              </g>
                              <g
                                id="Group_932"
                                data-name="Group 932"
                                transform="translate(554.935 405.064)"
                              >
                                <path
                                  id="Path_4785"
                                  data-name="Path 4785"
                                  d="M600.287,452.337h-11.13V432.579l15.162,0v15.723A4.044,4.044,0,0,1,600.287,452.337Z"
                                  transform="translate(-588.013 -431.435)"
                                  fill="#b0ddd2"
                                />
                                <path
                                  id="Path_4786"
                                  data-name="Path 4786"
                                  d="M598.93,452.126H587.8a1.144,1.144,0,0,1-1.144-1.144V431.223a1.145,1.145,0,0,1,1.144-1.144h0l15.162,0a1.143,1.143,0,0,1,1.143,1.144v15.723A5.182,5.182,0,0,1,598.93,452.126Zm-9.986-2.288h9.986a2.892,2.892,0,0,0,2.889-2.889v-14.58l-12.875,0Z"
                                  transform="translate(-586.657 -430.079)"
                                  fill="#464c54"
                                />
                              </g>
                              <path
                                id="Path_4787"
                                data-name="Path 4787"
                                d="M604.093,446.519h-5.326a1.144,1.144,0,1,1,0-2.288h5.326a1.144,1.144,0,1,1,0,2.288Z"
                                transform="translate(-37.671 -32.692)"
                                fill="#464c54"
                              />
                              <path
                                id="Path_4788"
                                data-name="Path 4788"
                                d="M604.093,461.136h-5.326a1.144,1.144,0,1,1,0-2.288h5.326a1.144,1.144,0,1,1,0,2.288Z"
                                transform="translate(-37.671 -40.622)"
                                fill="#464c54"
                              />
                              <g
                                id="Group_933"
                                data-name="Group 933"
                                transform="translate(533.962 383.968)"
                              >
                                <path
                                  id="Path_4789"
                                  data-name="Path 4789"
                                  d="M550.91,386.468a7.6,7.6,0,0,0-7.6,7.6c0,4.194,7.6,12.078,7.6,12.078s7.594-7.884,7.594-12.078A7.6,7.6,0,0,0,550.91,386.468Zm0,10.948a3.534,3.534,0,1,1,3.534-3.535A3.532,3.532,0,0,1,550.911,397.416Z"
                                  transform="translate(-542.171 -385.324)"
                                  fill="#fbe295"
                                />
                                <path
                                  id="Path_4790"
                                  data-name="Path 4790"
                                  d="M549.554,405.929a1.144,1.144,0,0,1-.824-.35c-.81-.841-7.915-8.347-7.915-12.872a8.738,8.738,0,1,1,17.477,0c0,4.525-7.1,12.031-7.914,12.872A1.144,1.144,0,0,1,549.554,405.929Zm0-19.674a6.459,6.459,0,0,0-6.452,6.452c0,2.7,4.1,7.8,6.452,10.4,2.35-2.6,6.45-7.7,6.45-10.4A6.458,6.458,0,0,0,549.554,386.256Zm0,10.948a4.678,4.678,0,1,1,4.679-4.678A4.683,4.683,0,0,1,549.555,397.2Zm0-7.069a2.391,2.391,0,1,0,2.391,2.391A2.394,2.394,0,0,0,549.555,390.134Z"
                                  transform="translate(-540.815 -383.968)"
                                  fill="#464c54"
                                />
                              </g>
                            </g>
                          </svg>

                          <div className="field for-w-100 cityBox">
                            <label>{t("select_city")}</label>
                            <CitySelectBox handleCityChange={handleCityChange} cityData={cityData} city={city} t={t}/>
                          </div>
                        </form>
                      </div>
                    </li>
                    <li className="getstart drp" id="desktopHide">
                      <div className="h_dropdown">
                        <Usersvg />
                        <span className="ml-2 mr-1">
                          {LoggedIn()
                            ? `${
                                getUser().FirstName
                                  ? "Hello, " + getUser().FirstName
                                  : ""
                              }`
                            : t("Login")}{" "}
                          <i className="fa fa-angle-down fa-xs ml-2"></i>
                        </span>
                        <div className="h_dropdown-menu">
                          {!LoggedIn() ? (
                            <>
                              <div>
                                <a
                                  href="https://lis.oncquest.net/labmateonline_7001/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e: any) => {
                                    e.preventDefault();
                                    window.open(
                                      "https://lis.oncquest.net/labmateonline_7001/",
                                      "_blank"
                                    );
                                  }}
                                >
                                  {" "}
                                  {t("lis_login")}
                                </a>
                              </div>
                              <hr />
                              <div>
                                {" "}
                                <a
                                  href="https://lis.oncquest.net/labmatefranchises_7001/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e: any) => {
                                    e.preventDefault();
                                    window.open(
                                      "https://lis.oncquest.net/labmatefranchises_7001/",
                                      "_blank"
                                    );
                                  }}
                                >
                                  {t("franchise_login")}
                                </a>
                              </div>
                              <hr />
                              <div>
                                <a
                                  href="https://itd.oncquest.net/Oncquest/Design/onlinelab/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title=""
                                  onClick={(e: any) => {
                                    e.preventDefault();
                                    window.open(
                                      "https://itd.oncquest.net/Oncquest/Design/onlinelab/"
                                    );
                                  }}
                                >
                                  {t("report")}
                                </a>
                              </div>
                              <hr />
                              <div>
                                <a
                                  href="https://admin.oncquestlabs.com/search-tests"
                                  target="_blank"
                                  title=""
                                  rel="noopener noreferrer"
                                  onClick={(e: any) => {
                                    e.preventDefault();
                                    window.open(
                                      "https://admin.oncquestlabs.com/search-tests",
                                      "_blank"
                                    );
                                  }}
                                >
                                  {t("range")}
                                </a>
                              </div>
                            </>
                          ) : (
                            <>
                              <div>
                                <a
                                  href="https://lis.oncquest.net/labmateonline_7001/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {t("lis_login")}
                                </a>
                              </div>
                              <hr />
                              <div>
                                {" "}
                                <a
                                  href="https://lis.oncquest.net/labmatefranchises_7001/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {t("franchise_login")}
                                </a>
                              </div>
                              <hr />
                              <div>
                                <a
                                  href="https://itd.oncquest.net/Oncquest/Design/onlinelab/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title=""
                                >
                                  {t("report")}
                                </a>
                              </div>
                              <hr />
                              <div>
                                <a
                                  href="https://admin.oncquestlabs.com/search-tests"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  title=""
                                >
                                  {t("range")}
                                </a>
                              </div>
                              <hr />
                              <div>
                                <div
                                  className="divlink"
                                  onClick={(e: any) => logout(e)}
                                >
                                  <i
                                    className="fa fa-sign-out fa-x mr-1"
                                    aria-hidden="true"
                                  ></i>
                                  {t("log_out")}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WelcomePopup/>
    </>
  );
}

export default React.memo(Header);
