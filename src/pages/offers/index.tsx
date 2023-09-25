import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import { toast } from "../../redux/common/common-reducer";

import { useRouter } from "next/router";
import { packageAction } from "@/redux/action";
import { ROUTE } from "@/Const/Route";
import { ImgPlaceHolder, ReplaceImgUriByLang } from "@/Utils";
import SectionLoader from "@/Component/Common/Loader/SectionLoader";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import { NextPage } from "next";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { NextSeo } from "next-seo";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
interface MyPageProps {
  seoData:any;
}
const Offer: NextPage<MyPageProps> = ({ seoData }) => {
  const  {t}  = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const [offerId, setOfferId] = useState("");
  const [imgUri, setImgUri] = useState<string>("");
  const [offer, setOffer] = useState<any>({});
  const [selectedOffer, setSelectedOffer] = useState<any>("");
  const offerData = useSelector((state: any) => state.package.offer);

  useEffect(() => {
    window?.scrollTo(0, 0);
    dispatch(packageAction.getAllOfferAction({}));
    return () => {};
  }, []);

  useEffect(() => {
    if (offerData) {
      setImgUri(offerData?.CouponBannerBaseUrl);
      setOffer(offerData?.Coupons);
    }
    return () => {};
  }, [offerData]);

  useEffect(() => {
    if (offerId) {
      dispatch(packageAction.getAllOfferByIdAction({}));
    }
    return () => {};
  }, [offerId]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

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
  const onCopy = () => {
    dispatch(
      toast({ message: "Coupon Code Copied Successfully", type: "success" })
    );
  };
  const handleCheckout = (e: any) => {
    e.preventDefault();
    router.push(ROUTE.CHECKOUT);
  };
  return (
    <>
      <NextSeo
        title={seoData?.SeoTitle}
        description={seoData?.SeoDescription}
        canonical={`${SITE_URL}${router.asPath}`}
        openGraph={{
          title:seoData?.SeoTitle,
          description:seoData?.SeoDescription,
          type: "website",
          locale: "en_IE",
          url: `${SITE_URL}${router.asPath}`,
          siteName: "oncquest-lab",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:seoData?.SeoKeywords
          },
        ]}
      />
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
                  __html:
                    selectedOffer?.Description &&
                    selectedOffer?.Description.slice(0, 500),
                }}
              ></div>
              <a
                href="#"
                className="button--hexagon1"
                onClick={(e: any) => handleCheckout(e)}
              >
                <span>
                  <i
                    className="fa fa-file-image-o mr-20"
                    aria-hidden="true"
                  ></i>
                  {t("book_now")}
                </span>
              </a>
            </div>
          </div>
        </div>
      </Modal>
      <BreadCrumb page={t("bread_all_offer")} data={{ slug: "", path: "" }} />
      <section className="sub-section h-offers bg-color">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="headingmains text-center pb-3">
                <h2 className="right aos-init pb-2">{t("all_offer")}</h2>
                <div className="row">
                  <div className="col-lg-2 col-sm-1"></div>
                  <div className="col-lg-8 col-sm-10">
                    <p className="text-center pl-2 pr-2">
                      {t("offer_content")}
                    </p>
                  </div>
                  <div className="col-lg-2 col-sm-1"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row offer-slider">
            {offerData && Object.keys(offerData).length > 0 ? (
              <>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  {offer &&
                    offer?.length > 0 &&
                    offer?.map(
                      (item: any, i: any) =>
                        i < 2 && (
                          <div
                            className="h-off sbg1"
                            onClick={() => setModalIsOpenToTrue(item)}
                            key={i}
                          >
                            <img
                              src={
                                item?.CouponIcon
                                  ? ReplaceImgUriByLang(item?.CouponIcon)
                                  : "/assets/img/offer0" + (i + 1) + ".png"
                              }
                              onError={(e: any) =>
                                ImgPlaceHolder(
                                  e,
                                  item?.CouponIcon ||
                                    "/assets/img/offer0" + (i + 1) + ".png"
                                )
                              }
                              className="scale"
                              alt=""
                            />
                          </div>
                        )
                    )}
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  <div className="btnoffer-d offer_below"></div>
                  {offer &&
                    offer?.length > 0 &&
                    offer?.map(
                      (item: any, i: any) =>
                        i >= 2 &&
                        i < 4 && (
                          <div
                            className="h-off sbg1"
                            onClick={() => setModalIsOpenToTrue(item)}
                            key={i}
                          >
                            <img
                              src={
                                item?.CouponIcon
                                  ? ReplaceImgUriByLang(item?.CouponIcon)
                                  : "/assets/img/offer0" + (i + 1) + ".png"
                              }
                              onError={(e: any) =>
                                ImgPlaceHolder(
                                  e,
                                  item?.CouponIcon ||
                                    "/assets/img/offer0" + (i + 1) + ".png"
                                )
                              }
                              className="scale"
                              alt=""
                            />
                          </div>
                        )
                    )}
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                  {offer &&
                    offer?.length > 0 &&
                    offer?.map(
                      (item: any, i: any) =>
                        i >= 4 &&
                        i < 6 && (
                          <div
                            className="h-off sbg1"
                            onClick={() => setModalIsOpenToTrue(item)}
                            key={i}
                          >
                            <img
                              src={
                                item?.CouponIcon
                                  ? ReplaceImgUriByLang(item?.CouponIcon)
                                  : "/assets/img/offer0" + (i + 1) + ".png"
                              }
                              onError={(e: any) =>
                                ImgPlaceHolder(
                                  e,
                                  item?.CouponIcon ||
                                    "/assets/img/offer0" + (i + 1) + ".png"
                                )
                              }
                              className="scale"
                              alt=""
                            />
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
export const getServerSideProps = async ({ locale }:{locale: string}) => {
  let Slug = ROUTE.OFFER?.replace("/", "");
  const data: any = await Api.post(Url.seoDetail, { Slug: Slug});
 
  return {
    props: {
      seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Offer;
