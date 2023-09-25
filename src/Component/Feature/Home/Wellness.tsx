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
                    <a className="explorewellness" href="https://oncquestlabs.com/blog/" target="_blank">{t("explore_all")}</a>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="h-well sbg1 for-line-break">
                        <div className="infobox_wrapper">
                            <div className="infobox_icon_container"><img src="https://oncquest-blog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2023/07/31064513/Alpha-Thalassemia.jpg" className="scale" alt='Alpha-Thalassemia' /></div>
                            <h4 className="infobox_title">
                            How Alpha Thalassemia Can Mess Up Your Blood: The Lowdown on the Rare Gene Mutation
                            </h4>
                            <p className="time">July 12, 2023</p>
                            <p>Alpha thalassemia is a blood disorder that reduces the production of hemoglobin. Hemoglobin is the iron rich protein in red blood cells that carries oxygen to cells throughout the body.</p>
                            <a href="https://oncquestlabs.com/blog/alpha-thalassemia/" target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="h-well sbg1 for-line-break">
                        <div className="infobox_wrapper">
                            <div className="infobox_icon_container"><img src="https://oncquest-blog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2023/07/31065634/GeneXpert-Test.jpg" className="scale" alt='GeneXpert-Test' /></div>
                            <h4 className="infobox_title">How GeneXpert Test Can Detect Tuberculosis in Minutes with High Accuracy</h4>
                            <p className="time">July 12, 2023</p>
                            <p>GeneXpert MTB/RIF (Xpert), introduced in the Philippines in 2011, is a rapid diagnostic test with high sensitivity and specificity for TB.</p>
                            <a href="https://oncquestlabs.com/blog/genexpert-test/" target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="h-well sbg1 for-line-break">
                        <div className="infobox_wrapper">
                            <div className="infobox_icon_container"><img alt='Autoimmune-Encephalitis' src="https://oncquestlabs.com/blog/wp-content/uploads/2023/07/Autoimmune-Encephalitis.jpg" className="scale" /></div>
                            <h4 className="infobox_title">What You Need to Know About Autoimmune Encephalitis: A Guide to the Mysterious Brain Disorder</h4>
                            <p className="time">October 4, 2022</p>
                            <p>Autoimmune encephalitis is a neurological condition characterized by inflammation of the brain resulting from an autoimmune response.</p>
                            <a href="https://oncquestlabs.com/blog/autoimmune-encephalitis/" target="_blank" className="mt-5 button--hexagon1"><span>{t("know_more")}</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



    )
}

export default Wellness