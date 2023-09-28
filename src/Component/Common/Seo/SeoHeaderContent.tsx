import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function SeoHeaderContent({seoData}:any) {
 
  useEffect(() => {
    window?.scrollTo(0, 0);
    })
 
 
  // const scrpt= `!function(px){function e(t,e,c){var n="",r="";try{""!=(n=function(t,e){try{var c={};e.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(t,e,n){c[e]=n});return c.hasOwnProperty(t)?c[t]:""}catch(t){return""}}(t,c))?function(t,e,c){try{var n,r;c?((n=new Date).setTime(n.getTime()+864e5),r="; expires="+n.toGMTString()):r="",document.cookie=t+"="+e+r+";Path=/"}catch(t){}}(e,n,1):n=function(t){try{var e=document.cookie.match(new RegExp("(^| )"+t+"=([^;]+)"));if(e)return e[2]}catch(t){}return null}(e),r=""!=n&&null!=n?"&"+t+"="+n:"&"+t+"="}catch(t){}return r}var c="",n="",r="";try{n=e("ad","acf",c=window.location.href),r=e("col_ci","col_ci",c)}catch(t){console.log(t)}var a="https://ade.clmbtech.com/cde/eventTracking.htm?pixelId="+px+"&_w=1&_t=2"+n+r+"&rd="+(new Date).getTime();(new Image).src=a}('14427');`
  //  const noscrpt =``
  return (
    <>
          <section className="imp-instruction">
        <div className='seo-footer-content'
                      dangerouslySetInnerHTML={{
                        __html: seoData?.HeaderContent
                          ? seoData?.HeaderContent
                          : "",
                      }}
                    ></div>
        </section>
    </>
  );
}

export default SeoHeaderContent;
