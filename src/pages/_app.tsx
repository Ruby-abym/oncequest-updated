import { appWithTranslation } from "next-i18next";
import "@/styles/globals.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import { Provider } from "react-redux";
import Layout from "@/Component/Common/Layout";
import configureStore from "@/redux/store";
import { DefaultSeo } from "next-seo";

const store = configureStore();
const App = ({ Component, pageProps }: AppProps) => {
 


  return (
    <>
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
