import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import WhyOncq from "./WhyOncq";
import { useSelector } from "react-redux";
import { ROUTE } from "@/Const/Route";
import { ReplaceImgUriByLang } from "@/Utils";
import SectionLoader from "@/Component/Common/Loader/SectionLoader";
import Link from "next/link";
import { useRouter } from "next/router";

function InnerFitness(props: any) {
  const {t} = useTranslation();
  const { packages, baseUri } = props;
  const router = useRouter();
  const [isShown, setIsShown] = useState<number>(1);
  const dashboard: any = useSelector(
    (state: any) => state.dashboard.dashboardData || null
  );

  return (
    <section className="categories section home-fitness">
      <div className="container">
        <WhyOncq />
        <div className="headingmains text-center pb-3">
          <h2 className="right aos-init pb-2">{t("inner_fitness_package")}</h2>
          <p className="text-center pl-2 pr-2">{t("inner_fitness_content")}</p>
          <p className="text-center">
            <Link
              passHref
              href={{ pathname: ROUTE.BOOKATEST, query: { tabs: "packages" } }}
              className="btn explorebtnfitness"
            >
              <span>
                {t("explore_all")}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="41.403"
                  height="26.331"
                  viewBox="0 0 41.403 26.331"
                >
                  <path
                    id="Icon_material-arrow-forward"
                    data-name="Icon material-arrow-forward"
                    d="M16.768,6l-2.32,2.32,9.183,9.2h-35.1v3.291h35.1l-9.183,9.2,2.32,2.32L29.933,19.166Z"
                    transform="translate(11.47 -6)"
                    fill="#424242"
                  ></path>
                </svg>
              </span>
            </Link>
          </p>
        </div>
        <div className="all-center sub-section pb-0">
          <div className="col-md-12 all-center pb-5">
            <div className="fitness-wraph">
              <div className="flex-container flex-container-mob">
                {dashboard && Object.keys(dashboard)?.length > 0 ? (
                  <>
                    {packages &&
                      packages?.length > 0 &&
                      packages?.map((item: any, index: any) => {
                        let img = item?.Banner
                          ? ReplaceImgUriByLang(baseUri) + item?.Banner
                          : `/assets/img/f${index + 1}.png`;
                        return (
                          index < 3 && (
                            <div
                              key={index}
                              style={{
                                backgroundImage: `url(${img}), url(${
                                  baseUri + item?.Banner
                                })`,
                                backgroundRepeat: "no-repeat",
                                backgroundColor: "#EDF3F8",
                              }}
                              className={
                                isShown == index + 1
                                  ? `flex-slide fit1 flex-slidehover`
                                  : `flex-slide fit1`
                              }
                              onMouseEnter={() => setIsShown(index + 1)}
                              onClick={() =>
                                router.push(
                                  `${ROUTE.PACKAGEDETAILS}/${item?.Slug}`
                                )
                              }
                            >
                              <h6 className="flex-title flex-title-home">
                                {t(item?.PackageName)}
                              </h6>
                            </div>
                          )
                        );
                      })}
                  </>
                ) : (
                  <SectionLoader />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InnerFitness;
