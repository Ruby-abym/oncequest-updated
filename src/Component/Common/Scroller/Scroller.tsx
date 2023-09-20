import { ROUTE } from "@/Const/Route";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
const Scroller = () => {
  const {t} = useTranslation();
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <ul className={scrollTop > 100 ? "buttonfix fixicon" : "buttonfix"}>
      <li className="mob-show">
        <a href="tel: 0124-6650000" target="_blank" className="hexagonbtn">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.909"
              height="23.305"
              viewBox="0 0 53.46 53.46"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="1.115"
                  y1="0.791"
                  x2="2.597"
                  y2="2.081"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stopColor="#24A0B8" />
                  <stop offset="1" stopColor="#CCCECE" />
                </linearGradient>
              </defs>
              <g transform="translate(-768 -947)">
                <path
                  d="M54.99,41.625a34.858,34.858,0,0,1-10.543-1.633,2.778,2.778,0,0,0-2.97.742l-6.535,6.533a44.662,44.662,0,0,1-19.6-19.6l6.535-6.533a3.1,3.1,0,0,0,.742-2.97A32.3,32.3,0,0,1,20.835,7.47a2.979,2.979,0,0,0-2.97-2.97H7.47A2.979,2.979,0,0,0,4.5,7.47,50.448,50.448,0,0,0,54.99,57.96a2.979,2.979,0,0,0,2.97-2.97v-10.4A2.979,2.979,0,0,0,54.99,41.625Z"
                  transform="translate(763.5 942.5)"
                  fill="url(#a)"
                />
                <path
                  d="M50.7,28.164H55.96A23.666,23.666,0,0,0,32.3,4.5V9.759A18.392,18.392,0,0,1,50.7,28.164Zm-10.517,0h5.259A13.151,13.151,0,0,0,32.3,15.017v5.259A7.877,7.877,0,0,1,40.184,28.164Z"
                  transform="translate(764.434 944.5)"
                  fill="#707070"
                  opacity="0.67"
                />
              </g>
            </svg>
          </p>
          <span>{t("home")}</span>
        </a>
      </li>
      <li className="active">
        <Link href={ROUTE.HOMECOLLECTION} className="hexagonbtn" passHref>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.316"
              height="29.093"
              viewBox="0 0 28.316 32.093"
            >
              <g
                id="Group_824"
                data-name="Group 824"
                transform="translate(-255.902 -226.112)"
              >
                <path
                  id="Path_4506"
                  data-name="Path 4506"
                  d="M391.5,366.579c0-.008,0-.017,0-.025s0-.041,0-.061a3.867,3.867,0,0,0-7.062-2.181,3.867,3.867,0,0,0-7.065,2.173q0,.029,0,.059c0,.009,0,.018,0,.027,0,1.48.909,3.115,2.7,4.86a24.5,24.5,0,0,0,3.773,2.939,1.085,1.085,0,0,0,1.163,0,24.5,24.5,0,0,0,3.777-2.935C390.588,369.693,391.5,368.059,391.5,366.579Z"
                  transform="translate(-114.368 -128.523)"
                  fill="#ffe900"
                />
                <path
                  id="Path_4507"
                  data-name="Path 4507"
                  d="M308.991,236.822a.67.67,0,0,0,.458-.181l9.8-9.133a.2.2,0,0,1,.27,0l9.871,9.133a.673.673,0,0,0,.913-.987l-9.874-9.136a1.555,1.555,0,0,0-2.1.011l-9.8,9.133a.673.673,0,0,0,.458,1.165Z"
                  transform="translate(-49.351)"
                  fill="#888"
                />
                <path
                  id="Path_4508"
                  data-name="Path 4508"
                  d="M266.113,420.3a5.354,5.354,0,0,0-.5-.472c-.167-.168-.4-.406-.669-.681l-.008-.008c-.673-.688-1.6-1.63-2.247-2.247a1.417,1.417,0,0,0-1.932-.018l-.061.056a1.777,1.777,0,0,0-.241,2.35l1.342,1.86-1.234-1.081c-.4-.422-.966-2.306-1.279-6.251a2.486,2.486,0,0,0-1.757-2.173l-.086-.025a1.194,1.194,0,0,0-1.535,1.145v5.774c0,3.314,2.039,5.746,3.838,7.892,1.225,1.461,2.282,2.722,2.282,3.828V431.8a1.01,1.01,0,0,0,1.009,1.009h4.731a1.01,1.01,0,0,0,1.009-1.009v-5.783a7.825,7.825,0,0,0-1.585-4.439A11.092,11.092,0,0,0,266.113,420.3Zm-5.342,5.257c-1.652-1.97-3.524-4.2-3.524-7.028v-5.566a1.134,1.134,0,0,1,.692.951c.31,3.914.876,6.305,1.681,7.108.016.016.016.016,2.434,2.134l.831.728a1.046,1.046,0,0,0,1.537-1.4l-2.881-3.994a.432.432,0,0,1,.059-.572l.061-.056a.073.073,0,0,1,.1,0c.632.6,1.545,1.532,2.212,2.213l.008.008c.29.3.54.552.714.726a.678.678,0,0,0,.082.07c.212.185,2.651,2.366,2.651,5.133v5.448h-4.059v-1.216C263.367,428.656,262.164,427.221,260.771,425.559Z"
                  transform="translate(0 -174.606)"
                  fill="#888"
                />
                <path
                  id="Path_4509"
                  data-name="Path 4509"
                  d="M532.446,411.8a1.2,1.2,0,0,0-1.055-.187l-.085.025a2.486,2.486,0,0,0-1.757,2.173c-.313,3.945-.882,5.829-1.279,6.251l-1.234,1.081,1.342-1.86a1.777,1.777,0,0,0-.241-2.35l-.061-.056a1.417,1.417,0,0,0-1.933.018c-.649.616-1.57,1.557-2.245,2.245-.273.278-.509.52-.68.691a5.382,5.382,0,0,0-.5.472,11.089,11.089,0,0,0-1.073,1.278,7.824,7.824,0,0,0-1.585,4.439V431.8a1.01,1.01,0,0,0,1.009,1.009H525.8a1.01,1.01,0,0,0,1.009-1.009V430.25c0-1.106,1.058-2.367,2.282-3.828,1.8-2.146,3.838-4.578,3.838-7.892v-5.774A1.2,1.2,0,0,0,532.446,411.8Zm-6.985,18.451v1.216H521.4v-5.448c0-2.765,2.437-4.947,2.651-5.133l.038-.029.139-.069v-.066c.172-.173.4-.4.63-.641l.006-.006c.664-.678,1.574-1.607,2.2-2.2a.073.073,0,0,1,.1,0l.061.056a.432.432,0,0,1,.059.572l-2.881,3.993a1.046,1.046,0,0,0,1.537,1.4l3.233-2.832.031-.029c.806-.8,1.372-3.2,1.682-7.109a1.134,1.134,0,0,1,.692-.951v5.566c0,2.825-1.872,5.058-3.524,7.028C526.664,427.22,525.461,428.655,525.461,430.25Z"
                  transform="translate(-248.708 -174.605)"
                  fill="#888"
                />
              </g>
            </svg>
          </p>
          <span>{t("home")}</span>{" "}
        </Link>
      </li>
      <li>
        <Link
          href={"#"}
          onClick={(e: any) => {
            e.preventDefault();
            router.push(
              {
                pathname: ROUTE.BOOKATEST,
                query: { tabs: "tests", categoryId: "", subCategoryId: "" },
              },
              ROUTE.BOOKATEST
            );
          }}
          className="hexagonbtn"
        >
          <p>
            <svg
              id="Group_823"
              data-name="Group 823"
              xmlns="http://www.w3.org/2000/svg"
              width="25.98"
              height="26.445"
              viewBox="0 0 29.98 34.445"
            >
              <path
                id="Path_4500"
                data-name="Path 4500"
                d="M1534.719,433.4s6.241,4.8-.48,11.161h6.481s5.641-9.361-3.24-13.562Z"
                transform="translate(-1515.607 -416.482)"
                fill="#cccece"
              />
              <path
                id="Path_4501"
                data-name="Path 4501"
                d="M1364.918,167.4l2.04-2.4-.84-1.08,12.122-13.8,1.2.96,2.16-2.28,2.4,1.8-2.04,2.52.72.96-12,13.922-1.2-.96-2.16,2.64Z"
                transform="translate(-1354.567 -148.082)"
                fill="#cccece"
              />
              <ellipse
                id="Ellipse_1533"
                data-name="Ellipse 1533"
                cx="2.64"
                cy="2.64"
                rx="2.64"
                ry="2.64"
                transform="translate(16.924 17.305) rotate(-80.783)"
                fill="#24a0b8"
              />
              <path
                id="Path_4502"
                data-name="Path 4502"
                d="M1193.357,759.831h-25.61a1.6,1.6,0,0,0-1.6,1.6v1.643h28.8v-1.643A1.6,1.6,0,0,0,1193.357,759.831Z"
                transform="translate(-1165.52 -729.227)"
                fill="#24a0b8"
              />
              <path
                id="Path_4503"
                data-name="Path 4503"
                d="M1219.308,691.121H1197.57c-1.089,0-1.973.562-1.973,1.255v2.105h25.684v-2.105C1221.281,691.683,1220.4,691.121,1219.308,691.121Z"
                transform="translate(-1193.527 -663.877)"
                fill="#cccece"
              />
              <g id="Group_822" data-name="Group 822">
                <path
                  id="Path_4504"
                  data-name="Path 4504"
                  d="M1183.085,136.391l-2.48-2.192a.48.48,0,0,0-.678.042l-1.874,2.12-.719-.636a.48.48,0,0,0-.678.042l-12.294,13.91a.48.48,0,0,0,.042.678l.718.635-1.874,2.12a.48.48,0,0,0,.042.678l2.48,2.192a.48.48,0,0,0,.318.12h.03a.48.48,0,0,0,.33-.161l1.874-2.12.718.635a.48.48,0,0,0,.318.121h.03a.48.48,0,0,0,.33-.161l2.069-2.341a3.192,3.192,0,0,0,1.278.331c2.25,2.637,2.117,5.509-.4,8.542h-15.786a1.963,1.963,0,0,0-1.96,1.96v1.361a1.862,1.862,0,0,0-1.655,1.848v1.93a.48.48,0,0,0,.48.48h28.782a.48.48,0,0,0,.48-.48v-1.93a1.862,1.862,0,0,0-1.655-1.848V162.9a1.962,1.962,0,0,0-1.926-1.959c1.438-2.834,1.7-5.454.774-7.8a10.1,10.1,0,0,0-3.819-4.478,3.2,3.2,0,0,0-.489-1.247l6.118-6.922a.48.48,0,0,0-.042-.678l-.718-.635,1.874-2.12A.48.48,0,0,0,1183.085,136.391Zm-17.039,18.551-1.761-1.556,1.556-1.76,1.76,1.557Zm9.42-5.752a2.254,2.254,0,1,1-2.254-2.254A2.257,2.257,0,0,1,1175.465,149.191Zm6.584,16.922v1.45h-27.822v-1.45a.9.9,0,0,1,.9-.9h26.023A.9.9,0,0,1,1182.049,166.113Zm-1.655-3.209v1.35h-24.512V162.9a1,1,0,0,1,1-1h22.512A1,1,0,0,1,1180.394,162.9Zm-2.05-1.96h-4.458a7.622,7.622,0,0,0,1.7-5.138,6.828,6.828,0,0,0-1.412-3.548,3.226,3.226,0,0,0,2.185-2.425C1179.124,151.9,1181.377,155.409,1178.344,160.943Zm-3.1-14.238a3.212,3.212,0,0,0-4.252,4.81l-1.679,1.9-.715-.632,0,0-2.48-2.192h0l-.717-.634,11.658-13.191.717.634,0,0,2.48,2.192,0,0,.716.633Zm5.286-8.153L1178.773,137l1.556-1.76,1.76,1.556Z"
                  transform="translate(-1153.267 -134.078)"
                  fill="#575757"
                />
                <path
                  id="Path_4505"
                  data-name="Path 4505"
                  d="M1272.182,640.192h6.044a.48.48,0,0,0,0-.96h-6.044a.48.48,0,1,0,0,.96Z"
                  transform="translate(-1265.91 -614.526)"
                  fill="#222935"
                />
              </g>
            </svg>
          </p>
          <span>{t("find")} </span>
        </Link>
      </li>
      <li>
        <Link
          href="https://itd.oncquest.net/Oncquest/Design/onlinelab/"
          target="_blank"
          className="hexagonbtn"
        >
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24.5"
              height="30"
              viewBox="0 0 24.5 33"
            >
              <defs>
                <pattern
                  id="pattern"
                  preserveAspectRatio="xMidYMid slice"
                  width="100%"
                  height="100%"
                  viewBox="0 0 179 242"
                >
                  <image
                    width="179"
                    height="242"
                    xlinkHref="data:image/png;base64,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"
                  />
                </pattern>
              </defs>
              <path
                id="shutterstock_1655323939"
                d="M8.684,0H21.5a3,3,0,0,1,3,3V30a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V8.942C.017,8.875,8.617.075,8.684,0Z"
                fill="url(#pattern)"
              />
            </svg>
          </p>
          <span>{t("download")}</span>
        </Link>
      </li>
      <li>
        <Link href={ROUTE.CENTER} className="hexagonbtn" passHref>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21.909"
              height="23.305"
              viewBox="0 0 19.909 25.305"
            >
              <path
                id="Path_4510"
                data-name="Path 4510"
                d="M9.077,0a9.077,9.077,0,0,1,9.077,9.077c0,5.013-6.149,14.672-8.6,14.672S0,14.09,0,9.077A9.077,9.077,0,0,1,9.077,0Z"
                transform="translate(0.789 0.837)"
                fill="#cccece"
              />
              <g id="Group_828" data-name="Group 828">
                <ellipse
                  id="Ellipse_1534"
                  data-name="Ellipse 1534"
                  cx="3.946"
                  cy="3.552"
                  rx="3.946"
                  ry="3.552"
                  transform="translate(5.983 6.362)"
                  fill="#24a0b8"
                />
                <g id="Group_827" data-name="Group 827">
                  <g
                    id="Group_750"
                    data-name="Group 750"
                    transform="translate(4.99 4.99)"
                  >
                    <path
                      id="Path_4466"
                      data-name="Path 4466"
                      d="M1974.855,1449.019a4.965,4.965,0,1,1,4.965-4.964A4.97,4.97,0,0,1,1974.855,1449.019Zm0-8.4a3.436,3.436,0,1,0,3.436,3.436A3.44,3.44,0,0,0,1974.855,1440.619Z"
                      transform="translate(-1969.89 -1439.09)"
                      fill="#575757"
                    />
                  </g>
                  <path
                    id="Path_4511"
                    data-name="Path 4511"
                    d="M1923.914,1408.469a3.012,3.012,0,0,1-2.5-1.321l-5.966-8.784a.624.624,0,0,1-.04-.065,9.955,9.955,0,1,1,17,0,.683.683,0,0,1-.04.067l-5.966,8.784A3.012,3.012,0,0,1,1923.914,1408.469Zm-7.174-10.93,5.943,8.75a1.488,1.488,0,0,0,2.461,0l5.941-8.748.005-.008a8.426,8.426,0,1,0-14.354,0Z"
                    transform="translate(-1913.959 -1383.163)"
                    fill="#575757"
                  />
                </g>
              </g>
            </svg>
          </p>
          <span>{t("find_center")}</span>
        </Link>
      </li>
    </ul>
  );
};

export default React.memo(Scroller);
