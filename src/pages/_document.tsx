import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export const getServerSideProps = async ({ locale }:{locale:string}) => ({
  props: {
      ...(await serverSideTranslations(locale, ['common']))
  }
});
export default MyDocument;
