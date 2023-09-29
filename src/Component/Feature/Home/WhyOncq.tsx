import React from 'react'
import { useTranslation } from 'next-i18next';

const WhyOncq = () => {
    const  {t}  = useTranslation();
  return (
    <div className="headingmains text-center pb-5">
          <h2 className="right aos-init pb-2">{t("why_oncquest")}</h2>
          <div className="row">
            <div className="">
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <img src={t("images.home.whyOnq1") || ""} alt="" />
                  <h6>{t("highly_advanced_laboratory")}</h6>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <img src={t("images.home.whyOnq3") || ""} alt="" />
                  <h6>{t("research_based")}</h6>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <img src={t("images.home.whyOnq4") || ""} alt="" />
                  <h6>{t("hassle_free")}</h6>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <img src={t("images.home.whyOnq5") || ""} alt="" />
                  <h6>{t("home_collection")}</h6>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <img src={t("images.home.whyOnq6") || ""} alt="" />
                  <h6>{t("fast_time")}</h6>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <img src={t("images.home.whyOnq7") || ""} alt="" />
                  <h6>{t("follow_all")}</h6>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <img src={t("images.home.whyOnq8") || ""} alt="" />
                  <h6>{t("digitally")}</h6>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <img src={t("images.home.whyOnq9") || ""} alt="" />
                  <h6>{t("widest_test_menu")} <br />{t("400_test")}</h6>
                </div>
              </div>
            </div>
           
          </div>
        </div>
  )
}

export default WhyOncq