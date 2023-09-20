import React, { useEffect } from 'react'
import { useTranslation } from 'next-i18next';

const HomeCollTandC = () => {
    const {t}  = useTranslation();
    useEffect(() => {
        window?.scrollTo(0, 0);
        return () => {}
    }, [])
    return (
        <div className="content pb-0 pt-0 bg-gray">
			<section className="about-section">
				<div className="container" id="section2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="overview-wrap">
                                <div className="headingmains text-center pb-4">
                                    <h1 className="right">{t("term_condition_footer")}</h1>
                                </div>
                                <ul className='policy'>
                                <li >{t("term_condition_home_col1")}</li>
                                <li >{t("term_condition_home_col2")}</li>
                                <li >{t("term_condition_home_col3")}</li>
                                <li >{t("term_condition_home_col4")}</li>
                                <li >{t("term_condition_home_col5")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeCollTandC
