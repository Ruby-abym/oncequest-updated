import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider } from "react-redux";
import Layout from "@/Component/Common/Layout";
import configureStore from "@/redux/store";
import { DefaultSeo } from "next-seo";
import Script from "next/script";
const store = configureStore();
const App = ({ Component, pageProps }: AppProps) => {
 


  return (
    <>
    <Head>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','AW-674299531');
      `}
    </Script>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`
       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
       })(window,document,'script','dataLayer','UA-229984587-1');
      `}
    </Script>
    </Head>
      <DefaultSeo
        title="Best Pathology Labs India | Diagnostic Centre | Blood Testing Home Collection - Oncquest Labs"
        description="India's Super Specialized Laboratories Network | Oncquest Laboratories is the best/leading pathology labs and diagnostics centre in India. We provide Blood test, Cancer testing, top Diagnostic Centre for Health check-up services at home in Delhi NCR, India. Blood testing sample collection is also available at home. Oncquest Labs is easy to use and convenient for patients to check their blood test report online."
        openGraph={{
          title:
            "Best Pathology Labs India | Diagnostic Centre | Blood Testing Home Collection - Oncquest Labs",
          description:
            "India's Super Specialized Laboratories Network | Oncquest Laboratories is the best/leading pathology labs and diagnostics centre in India. We provide Blood test, Cancer testing, top Diagnostic Centre for Health check-up services at home in Delhi NCR, India. Blood testing sample collection is also available at home. Oncquest Labs is easy to use and convenient for patients to check their blood test report online.",
          type: "website",
          locale: "en_IE",
          url: "https://www.url.ie/",
          siteName: "SiteName",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Pathology labs,best pathology labs,top diagnostic centre,pathology labs in delhi ncr,diagnostic labs in delhi ncr,blood test collection at home,cancer testing in delhi ncr,oncquest",
          },
        ]}
      />
   
        <Provider store={store}>
          <div className="main-wrapper">
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </div>
        </Provider>
        
    </>
  );
}

export default appWithTranslation(App);
