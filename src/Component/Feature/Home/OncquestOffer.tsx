import React, { useState } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import Link from "next/link";
import { ROUTE } from "@/Const/Route";
import { ImgPlaceHolder, ReplaceImgUriByLang } from "@/Utils";
import SectionLoader from "@/Component/Common/Loader/SectionLoader";
import { useTranslation } from "next-i18next";

function OncquestOffer(props: any) {
  const  {t} = useTranslation();
  const { Offers } = props;
 
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState<any>("");
  const dashboard: any = useSelector(
    (state: any) => state.dashboard.dashboardData || null
  );
  const setModalIsOpenToTrue = (data: any) => {
    setSelectedOffer(data);
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      maxWidth: "800px",
    },
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <div className="model-header">
          <span className="model-btn pointer" onClick={setModalIsOpenToFalse}>
            x
          </span>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h5 className="infobox_title text-uppercase">
              {selectedOffer?.CouponTitle}
            </h5>
            <div className="pl-1">
              {selectedOffer?.ShortDescription &&
                selectedOffer?.ShortDescription.slice(0, 100)}
            </div>
            <div className="p-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: selectedOffer?.Description
                    ? selectedOffer?.Description.slice(0, 500)
                    : "",
                }}
              ></div>
              <Link
                passHref
                href={{ pathname: ROUTE.BOOKATEST, query: { tabs: "tests" } }}
                className="button--hexagon1"
              >
                <span>
                  <i
                    className="fa fa-file-image-o mr-20"
                    aria-hidden="true"
                  ></i>
                  {t("book_now")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
      <section className="sub-section h-offers">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="headingmains text-center pb-3">
                <h2 className="right aos-init pb-2">{t("offer")}</h2>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10">
                    <p className="text-center pl-2 pr-2">
                      {t("offer_content")}
                    </p>
                  </div>
                  <div className="col-1"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row offer-slider">
            {dashboard && Object.keys(dashboard)?.length > 0 ? (
              <>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  {Offers &&
                    Offers?.length > 0 &&
                    Offers?.map(
                      (item: any, i: any) =>
                        i < 2 && (
                          <div
                            className="h-off sbg1"
                            key={i}
                            onClick={() => setModalIsOpenToTrue(item)}
                          >
                            <a
                              href="#"
                              onClick={(e: any) => e.preventDefault()}
                            >
                              {/* <img
                                src={
                                  item?.CouponBanner
                                    ? ReplaceImgUriByLang(item?.CouponBanner)
                                    : "/assets/img/offer0" + (i + 1) + ".png"
                                }
                                onError={(e: any) =>
                                  ImgPlaceHolder(
                                    e,
                                    item?.CouponBanner ||
                                      "/assets/img/offer0" + (i + 1) + ".png"
                                  )
                                }
                                className="scale"
                              /> */}
                            </a>
                          </div>
                        )
                    )}
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="btnoffer-d">
                    <Link href={ROUTE.OFFER} className="btn explorebtn">
                      <span>{t("explore_all")}</span>
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
                    </Link>
                  </div>
                  {Offers &&
                    Offers?.length > 0 &&
                    Offers?.map(
                      (item: any, i: any) =>
                        i >= 2 &&
                        i < 4 && (
                          <div
                            className="h-off sbg1"
                            key={i}
                            onClick={() => setModalIsOpenToTrue(item)}
                          >
                            <a
                              href="#"
                              onClick={(e: any) => e.preventDefault()}
                            >
                              {/* <img
                                src={
                                  item?.CouponBanner
                                    ? ReplaceImgUriByLang(item?.CouponBanner)
                                    : "/assets/img/offer0" + (i + 1) + ".png"
                                }
                                onError={(e: any) =>
                                  ImgPlaceHolder(
                                    e,
                                    item?.CouponBanner ||
                                      "/assets/img/offer0" + (i + 1) + ".png"
                                  )
                                }
                                className="scale"
                              /> */}
                            </a>
                          </div>
                        )
                    )}
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  {Offers &&
                    Offers?.length > 0 &&
                    Offers?.map(
                      (item: any, i: any) =>
                        i >= 4 &&
                        i < 6 && (
                          <div
                            className="h-off sbg1"
                            key={i}
                            onClick={() => setModalIsOpenToTrue(item)}
                          >
                            <a
                              href="#"
                              onClick={(e: any) => e.preventDefault()}
                            >
                              {/* <img
                                src={
                                  item?.CouponBanner
                                    ? ReplaceImgUriByLang(item?.CouponBanner)
                                    : "/assets/img/offer0" + (i + 1) + ".png"
                                }
                                onError={(e: any) =>
                                  ImgPlaceHolder(
                                    e,
                                    item?.CouponBanner ||
                                      "/assets/img/offer0" + (i + 1) + ".png"
                                  )
                                }
                                className="scale"
                              /> */}
                            </a>
                          </div>
                        )
                    )}
                </div>
              </>
            ) : (
              <SectionLoader />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default OncquestOffer;
