import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
const obj =  {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Oncquest Labs",
  "url": "https://oncquestlabs.com/",
  "logo": "https://oncquestlabs.com/assets/img/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7065350350",
    "contactType": "customer service"
  },
  "sameAs": [
    "https://www.facebook.com/OncquestLaboratories/",
    "https://twitter.com/Oncquest1",
    "https://www.instagram.com/oncquestlab/",
    "https://www.youtube.com/c/OncquestLaboratoriesLtd",
    "https://www.linkedin.com/company/oncquest-labs-ltd-/"
  ]
}
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <script type="application/ld+json"  dangerouslySetInnerHTML={{__html:JSON.stringify( obj
 ,null,'')}}>
    
      </script>
        <script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','AW-674299531');`,
    }}
    
  />
       <script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','UA-229984587-1');`,
    }}
    
  />
  <script src="
https://cdn.jsdelivr.net/npm/react-helmet@6.1.0/lib/Helmet.min.js
"></script>

<script   dangerouslySetInnerHTML={{
    __html:`(function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3531955,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
  })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`
  }}>

  
</script>
       
        </Head>
        <body>
      
          <Main />
          <NextScript />
          <noscript
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=AW-674299531" height="0" width="0" style="display: none; visibility: hidden;" />`,
    }}
  />

<noscript
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=UA-229984587-1" height="0" width="0" style="display: none; visibility: hidden;" />`,
    }}
  />
   <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-674299531"
    ></Script>
     <Script
      async
      src="https://www.googletagmanager.com/gtag/js?id=UA-229984587-1"
    ></Script>
          <Script
            src="./assets/js/jquery-3.4.1.min.js"
            crossOrigin="anonymous"
            type="text/javascript"
            strategy="beforeInteractive"
          ></Script>
          <Script
            src="./assets/js/popper.min.js"
            crossOrigin="anonymous"
            type="text/javascript"
            strategy="beforeInteractive"
          ></Script>
          <Script
            src="./assets/js/bootstrap.min.js"
            type="text/javascript"
            strategy="beforeInteractive"
          ></Script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
