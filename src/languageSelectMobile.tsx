import React, {useEffect} from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
const languageMap: any = {
    en: { label: "English", dir: "ltr", active: true },
    hn: { label: "हिन्दी", dir: "ltr", active: false  },
    bn: { label: "বাংলা", dir: "ltr", active: false},
    kn: { label: "ಕನ್ನಡ", dir: "ltr", active: false},
    ta: { label: "தமிழ்", dir: "ltr", active: false },  
  };

const LanguageSelectMobile = (props: any) => {
  
    const {t} = useTranslation()
  const {locale} = useRouter()

    return (
        <div className="h_dropdown"><i className="fa fa-language" style={{ marginRight: "10px" }}></i><span>{t("select_language")}<i className="fa fa-angle-down fa-xs ml-2"></i></span>
            <div className="h_dropdown-menu">
                {Object.keys(languageMap)?.map((item, i) => (
                    <React.Fragment key={i}>
                        <div><Link href="" locale={item}
                        className={locale == item ? "activeLang":""} 
                         >{languageMap[item].label}</Link></div>
                        {(Object.keys(languageMap)?.length - 1) > i && <hr />}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default LanguageSelectMobile;
