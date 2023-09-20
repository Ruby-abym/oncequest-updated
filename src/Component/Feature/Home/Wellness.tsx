import React from 'react'
import { useTranslation } from 'next-i18next';
function Wellness() {
    const  {t} = useTranslation();
    return (
        <section className="sub-section h-wellness">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="xs-feature-text-content text-left">
                            <div className="xs-heading">
                                <h2 className="xs-title">{t("wellness")}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <a className="explorewellness" href="https://oncquestlabs.com/blog/" target="_blank" rel="noopener noreferrer">{t("explore_all")}</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="h-well sbg1">
                            <div className="infobox_wrapper">
                                <div className="infobox_icon_container"><img src="https://oncquestlabs.com/blog/wp-content/uploads/2023/01/technology-in-clinical-laboratory.png" className="scale" /></div>
                                <h4 className="infobox_title height-51">
                                The role of technology in the clinical laboratory of the future
                                </h4>
                                <p className="time">January 5, 2023</p>
                                <p>Dr. Sushrut Pownikar Head, Quality Assurance Department & Deputy Director, Oncquest Laboratories Ltd As a child, I used to be amazed at Star Trek’s Dr.…</p>
                                <a href="https://oncquestlabs.com/blog/the-role-of-technology-in-the-clinical-laboratory-of-the-future/" target="_blank" rel="noopener noreferrer" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="h-well sbg1">
                            <div className="infobox_wrapper">
                                <div className="infobox_icon_container"><img src="https://oncquestlabs.com/blog/wp-content/uploads/2022/12/covid-answers.png" className="scale" /></div>
                                <h4 className="infobox_title height-51">Covid answers by Dr Shivali Oncquest</h4>
                                <p className="time">December 1, 2022</p>
                                <p>Dr Shivali Ahlawat Head of National Reference Laboratory at Oncquest Laboratories Ltd. Q.1 In Delhi NCR, How many requests are getting for RTPCR AND Antigen…</p>
                                <a href="https://oncquestlabs.com/blog/covid-answers-by-dr-shivali-oncquest/" target="_blank" rel="noopener noreferrer" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="h-well sbg1">
                            <div className="infobox_wrapper">
                                <div className="infobox_icon_container"><img src="https://oncquestlabs.com/blog/wp-content/uploads/2022/10/tobacco-intake-is-harmful.png" className="scale" /></div>
                                <h4 className="infobox_title height-51">How much does tobacco intake harm your lungs?</h4>
                                <p className="time">October 4, 2022</p>
                                <p>Tobacco intake harms your body in countless ways. It is imperative to consider the harmful effect it has on your body, family, society and financial…</p>
                                <a href="https://oncquestlabs.com/blog/how-much-does-tobacco-intake-harm-your-lungs/" target="_blank" rel="noopener noreferrer" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default Wellness