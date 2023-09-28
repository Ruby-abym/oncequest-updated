import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SeoFooterContent({seoData}:any) {
 
  useEffect(() => {
    window?.scrollTo(0, 0);
    })
 
 
  
  return (
    <>
          <section className="imp-instruction">
        <div className='seo-footer-content'
                      dangerouslySetInnerHTML={{
                        __html: seoData?.FooterContent
                          ? seoData?.FooterContent
                          : "",
                      }}
                    ></div>
        </section>
    </>
  );
}

export default SeoFooterContent;
