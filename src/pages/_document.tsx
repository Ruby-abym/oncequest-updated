import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <script
    dangerouslySetInnerHTML={{
      __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-MG7ZRNB4');`,
    }}
  />
       
        </Head>
        <body>
      
          <Main />
          <NextScript />
          <noscript
    dangerouslySetInnerHTML={{
      __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MG7ZRNB4" height="0" width="0" style="display: none; visibility: hidden;" />`,
    }}
  />
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
