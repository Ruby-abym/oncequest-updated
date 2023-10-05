import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { ROUTE } from "@/Const/Route";
import BreadCrumb from "@/Component/Common/BreadCrumb";
import { GetStaticProps, NextPage } from "next";
import Api from "@/redux/common/api";
import { SITE_URL, Url } from "@/redux/common/url";
import { NextSeo } from "next-seo";
import { ProfileTabEnum } from "@/Enum/ProfileTabEnum";
import { useRouter } from "next/router";
import TabLink from "@/Component/Feature/MyProfile/Component/TabLink";
import MyAccount from "@/Component/Feature/MyProfile/MyAccount";
import EditProfile from "@/Component/Feature/MyProfile/EditProfile";
import MyOrder from "@/Component/Feature/MyProfile/MyOrder";
import DownloadReport from "@/Component/Feature/MyProfile/DownloadReport";
import ManageAddress from "@/Component/Feature/MyProfile/ManageAddress";
import FamilyMember from "@/Component/Feature/MyProfile/FamilyMember";
import PaymentHistory from "@/Component/Feature/MyProfile/PaymentHistory";
import TermsCondition from "@/Component/Feature/MyProfile/TermsCondition";
import FaqTab from "@/Component/Feature/MyProfile/FaqTab";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

interface MyPageProps {
  seoData: any;
}
const MyProfile: NextPage<MyPageProps> = ({ seoData }) => {
  const {t} = useTranslation();
  const router = useRouter();
  const tabRef:any = useRef<HTMLInputElement>(null)
  const [tab, setTab] = useState<any>(ProfileTabEnum.MyAccount);

  const handleTab = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    newTab: any
  ) => {
    e.preventDefault();
    setTab(newTab);
  };

  const handleClick = (newTab: React.SetStateAction<string>) => setTab(newTab);

  useEffect(() => {
    window?.scrollTo(0, tabRef?.current?.scrollTop);
    /* tabRef.current.scrollIntoView({ behavior: "smooth", block: "start" }); */
  }, [tab]);

  const tabData: any[] = [
    {
      label: "My Orders",
      tabName: ProfileTabEnum.MyOrder,
      icon: "/assets/img/my-profile/profile-module1.png",
    },
    {
      label: "Download Report",
      tabName: ProfileTabEnum.DownloadReport,
      icon: "/assets/img/my-profile/profile-module2.png",
    },
    {
      label: "Family Members",
      tabName: ProfileTabEnum.FamilyMember,
      icon: "/assets/img/my-profile/profile-module3.png",
    },
    {
      label: "Manage Addresses",
      tabName: ProfileTabEnum.ManageAddress,
      icon: "/assets/img/my-profile/profile-module4.png",
    },
    {
      label: "Payment History",
      tabName: ProfileTabEnum.PaymentHistory,
      icon: "/assets/img/my-profile/profile-module5.png",
    },
    {
      label: "FAQ",
      tabName: ProfileTabEnum.Faqs,
      icon: "/assets/img/my-profile/profile-module6.png",
    },
    {
      label: "Terms & Conditions",
      tabName: ProfileTabEnum.Terms,
      icon: "/assets/img/my-profile/profile-module7.png",
    },
  ];

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
      <BreadCrumb page="My Profile" data={{ slug: "", path: "" }} />
      <section
        className="my-profile-sec bg-gray pt-3"
        style={{ color: "#242424", fontFamily: "Poppins, sans-serif" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="profile-sidebar profile-inbox">
                <div className="profile_top_box">
                  <div className="pro-logo text-center">
                    <span className="text_name">M</span>
                    <img
                      src="/assets/img/my-profile/pro-header-bg.png"
                      alt=""
                    />
                  </div>
                  <div className="pro-info text-center">
                    <h3>
                      Manoj Gupta
                      <img
                        src="/assets/img/my-profile/edit.png"
                        alt=""
                        className="ml-2 cursor-pointer scale_picon"
                        onClick={(e: any) =>
                          handleTab(e, ProfileTabEnum.EditProfile)
                        }
                      />
                    </h3>
                    <p>manojgupta@gmail.com</p>
                    <p>+91 882822524586</p>
                  </div>
                </div>
                <div className="profile-module">
                  <ul>
                    {tabData &&
                      tabData?.map((ele: any, idx: number) => (
                        <TabLink
                          key={idx}
                          classStyle={
                            tab === ele?.tabName ? "active_profile_Tab" : ""
                          }
                          onClick={(e: any) => handleTab(e, ele?.tabName)}
                          icon={ele?.icon}
                          label={ele?.label}
                        />
                      ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div ref={tabRef}>
                {ProfileTabEnum.MyAccount === tab && (
                  <MyAccount handleClick={handleClick} />
                )}
                {ProfileTabEnum.EditProfile === tab && <EditProfile />}
                {ProfileTabEnum.MyOrder === tab && <MyOrder />}
                {ProfileTabEnum.DownloadReport === tab && <DownloadReport />}
                {ProfileTabEnum.ManageAddress === tab && <ManageAddress />}
                {ProfileTabEnum.FamilyMember === tab && <FamilyMember />}
                {ProfileTabEnum.PaymentHistory === tab && <PaymentHistory />}
                {ProfileTabEnum.Faqs === tab && <FaqTab />}
                {ProfileTabEnum.Terms === tab && <TermsCondition />}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-coll-whyonc pt-3"></div>
    </React.Fragment>
  );
};
export const getServerSideProps = async ({
  locale,
}:{locale:string}) => {
  let Slug = ROUTE.MYPROFILE?.replace("/", "");
  const data: any = await Api.post(Url.seoDetail, { Slug: Slug });
  return {
    props: {
      seoData: data?.Result?.Details || {},
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default MyProfile;
