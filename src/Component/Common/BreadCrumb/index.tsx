import { ROUTE } from "@/Const/Route";
import Link from "next/link";
import React from "react";

import { useTranslation } from "next-i18next";
const Breadcrumb = (props: any) => {
  const  {t} = useTranslation();
  const { page, data } = props;
  return (
    <section className="breadcrumb_wrp bg-white">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb purple lighten-4 mb-0">
            <li className="breadcrumb-item">
              <Link className="black-text" href={ROUTE.HOME}>
                {t("home_bread")}
              </Link>
              <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
            </li>
            {!data?.slug || !data?.path ? (
              <li className="breadcrumb-item active">{page}</li>
            ) : (
              <>
                <li className="breadcrumb-item">
                  <Link className="black-text" href={data?.path}>
                    {page}
                  </Link>
                  <i className="fa fa-angle-right mx-2" aria-hidden="true"></i>
                </li>
                <li className="breadcrumb-item active">{data?.slug}</li>
              </>
            )}
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default React.memo(Breadcrumb);
