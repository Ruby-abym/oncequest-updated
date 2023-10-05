import React, { useEffect, useState } from "react";
import styles from './../../styles/checkout.module.css';
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { getUser } from "@/Utils/index";
import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import LoginVerify from "@/Component/Feature/CheckOut/Tabs/LoginVerify";
import Member from "@/Component/Feature/CheckOut/Tabs/Member";
import Address from "@/Component/Feature/CheckOut/Tabs/Address";
import Schedual from "@/Component/Feature/CheckOut/Tabs/Schedual";
import Payoption from "@/Component/Feature/CheckOut/Tabs/Payoption";
import CartBox from "@/Component/Feature/CheckOut/Tabs/CartBox";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface MyPageProps {
  seoData: any;
}

const CheckOut: NextPage<MyPageProps> = ({ seoData }) => {
  const {t} = useTranslation();
  const router = useRouter();
  const USER: any = getUser();
  const [tab, setTab] = useState<string>("");
  const [totalPayble, setTotalPayble] = useState<number>(0);

  useEffect(() => {
    window?.scrollTo(0, 0);
    return () => {};
  }, []);
  
  const handleTab = (_tab: any) => {
    setTab(_tab === tab ? "" : _tab);
  };
  return (
    <React.Fragment>
      <NextSeo
        title={seoData?.SeoTitle}
        description={seoData?.SeoDescription}
        canonical={`${SITE_URL}${router.asPath}`}
        openGraph={{
          title: seoData?.SeoTitle,
          description: seoData?.SeoDescription,
          type: "website",
          locale: "en_IE",
          url: `${SITE_URL}${router.asPath}`,
          siteName: "oncquest-lab",
          images: [
            {
              url: "https://admin.oncquestlabs.com/public/en/uploads/packages/inner-fitness-advance1643629102.jpg",
              alt: "Og Image Alt",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content: seoData?.SeoKeywords,
          },
        ]}
      />
      <BreadCrumb page={t("checkout")} data={{ slug: "", path: "" }} />
      <section className={`${styles.fontFamily} bg-gray section pt-3`}>
        <div className="container" id="section2">
          <div className="row">
            <div className="col-md-8">
              <ul>
                <li
                  className={
                    !USER?.Id && tab === "login" ? styles.tabActive : styles.tab
                  }
                >
                  <div
                    className={styles.tabLabel}
                    onClick={() => handleTab("login")}
                  >
                    <span>
                      {USER?.Id
                        ? `${USER?.FirstName || ""} ${USER?.MobileNo || ""}`
                        : "Login/Register"}
                    </span>
                    {USER?.Id && <img src="/assets/img/my-profile/steptick.png" />}
                  </div>
                  {tab === "login" && !USER?.Id && (
                    <div className={styles.tabDes}>
                      <LoginVerify />
                    </div>
                  )}
                </li>
                <li
                  className={tab === "member" ? styles.tabActive : styles.tab}
                >
                  <div
                    className={styles.tabLabel}
                    onClick={() => handleTab("member")}
                  >
                    <span>Select Member</span>
                    <img src="/assets/img/my-profile/steptick.png" />
                  </div>
                  {tab === "member" && (
                    <div className={styles.tabDes}>
                      <Member />
                    </div>
                  )}
                </li>
                <li
                  className={tab === "address" ? styles.tabActive : styles.tab}
                >
                  <div
                    className={styles.tabLabel}
                    onClick={() => handleTab("address")}
                  >
                    <span>Add Sample Collection Address</span>
                    <img src="/assets/img/my-profile/steptick.png" />
                  </div>
                  {tab === "address" && (
                    <div className={styles.tabDes}>
                      <Address />
                    </div>
                  )}
                </li>
                <li
                  className={tab === "schedual" ? styles.tabActive : styles.tab}
                >
                  <div
                    className={styles.tabLabel}
                    onClick={() => handleTab("schedual")}
                  >
                    <span>Date & Time</span>
                    <img src="/assets/img/my-profile/steptick.png" />
                  </div>
                  {tab === "schedual" && (
                    <div className={styles.tabDes}>
                      <Schedual />
                    </div>
                  )}
                </li>
                <li
                  className={tab === "payment" ? styles.tabActive : styles.tab}
                >
                  <div
                    className={styles.tabLabel}
                    onClick={() => handleTab("payment")}
                  >
                    <span>Payment Option</span>
                    <img src="/assets/img/my-profile/steptick.png" />
                  </div>
                  {tab === "payment" && (
                    <div className={styles.tabDes}>
                      <Payoption totalPayble={totalPayble || 0} />
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <CartBox
                totalPayble={totalPayble || 0}
                setTotalPayble={setTotalPayble}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export const getServerSideProps = async ({ locale }:{locale: string}) => {
  let Slug = ROUTE.CHECKOUT?.replace("/", "");
  const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
  return {
    props: {
      seoData: data?.Result?.Details || {},
        ...(await serverSideTranslations(locale, ["common"])),    
    }
  };
};
export default CheckOut;
