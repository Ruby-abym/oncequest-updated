
import Document, {
  Html,
  Head,
  Main,
  NextScript,
 } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
         
    <Script src="./assets/js/jquery-3.4.1.min.js" crossOrigin="anonymous" type="text/javascript" strategy="beforeInteractive"></Script>
    <Script src="./assets/js/popper.min.js" crossOrigin="anonymous" type="text/javascript" strategy="beforeInteractive"></Script>
    <Script src="./assets/js/bootstrap.min.js" type="text/javascript" strategy="beforeInteractive"></Script>
    
        </body>
      </Html>
    );
  }
}

export default MyDocument;
