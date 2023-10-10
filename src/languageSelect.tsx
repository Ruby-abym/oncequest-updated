import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";


const languageMap: any = {
  en: { label: "English", dir: "ltr", active: true},
  hn: { label: "हिन्दी", dir: "ltr", active: false },
  bn: { label: "বাংলা", dir: "ltr", active: false },
  kn: { label: "ಕನ್ನಡ", dir: "ltr", active: false },
  ta: { label: "தமிழ்", dir: "ltr", active: false},  
};

const LanguageSelect = () => {
  // const selected = typeof localStorage !== 'undefined' && localStorage.getItem("i18nextLng") || "en";
  
  const {locale,query, pathname} = useRouter();
 

  return (
    <div className="select-lang">
      <img src="/assets/img/language1.svg" alt="lang" />
      {Object.keys(languageMap)?.map((item, i) => (
        <React.Fragment key={i}>
          <Link href={{pathname,query}} locale={item} className={locale == item ? "activeLang":""} 
          >{languageMap[item].label}</Link>
          <span>{(Object.keys(languageMap)?.length - 1) > i && `  |  `}</span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default LanguageSelect;
