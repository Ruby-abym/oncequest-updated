import React from "react";
import Link from "next/link";
import { ROUTE } from '@/Const/Route';

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function Custom404() {
  const {t}= useTranslation();
  return (
    <section>
      <div className="error-sec">
        <div className="container">
          <div className="error-img text-center">
          <img src="../assets/img/404error-img.png" alt="404error" />
          </div>
          <div className="back-btn-error text-center">
          <Link href={ROUTE.HOME} target="_blank" className="button--hexagon1"><span>BACK TO HOMEPAGE </span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export const getStaticProps = async ({ locale }:{locale: string}) => {

  return {
    props: {
     
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
export default Custom404;
