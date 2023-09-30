
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
         
    <Script src="../Assets/js/jquery-3.4.1.min.js"  strategy="afterInteractive"></Script>
    <Script src="../Assets/js/popper.min.js" strategy="afterInteractive"></Script>
    <Script src="../Assets/js/bootstrap.min.js" strategy="afterInteractive"></Script>
    
        </body>
      </Html>
    );
  }
}

export default MyDocument;
