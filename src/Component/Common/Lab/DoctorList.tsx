import React from 'react'
import { useTranslation } from 'next-i18next';

const DoctorList = () => {
    const  {t}  = useTranslation();
    return (
        <section className="bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="headingmains text-center pb-3 mt-4 mt-lg-5">
                            <h3 className="right aos-init pb-2 text-capitalize ">{t("doctor_team")}</h3>
                        </div>
                    </div>
                </div>
                <div className="equal_clm h-services Department">
                    <div className="infobox_wrapper doctor_card">
                        <div>
                            <div>
                                <div className="doc_infobox_icon_container text-center">
                                    <img src={t("images.bg_lab.dr_gale")} className="doc_scale" alt="" />
                                </div>
                                <h3 className="infobox_title">Dr Gale</h3>
                                <div className="infobox_title mb-2">Lab Head</div>
                            </div>
                        </div>
                    </div>
                    <div className="infobox_wrapper doctor_card">
                        <div>
                            <div>
                                <div className="doc_infobox_icon_container text-center">
                                    <img src={t("images.bg_lab.dr_justina")} className="doc_scale" alt="" />
                                </div>
                                <h3 className="infobox_title">Dr Justina</h3>
                                <div className="infobox_title mb-2">Consultant Pathology</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DoctorList