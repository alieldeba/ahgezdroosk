import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="ar" dir="rtl">
        <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* SEO */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="أحجز" />
          <meta property="og:locale" content="ar_AR" />
          <meta property="og:locale:alternate" content="ar_AR" />
          <meta property="og:url" content="https://ahgez.vercel.app" />
          <meta
            property="og:title"
            content="منصة أحجز دروسك للطلاب و المعلمين"
          />
          <meta
            property="og:description"
            content="منصة أحجز دروسك للطلاب و المعلمين لحجز الدروس من البيت بدون اى تعب"
          />
          <meta property="og:image" content="/images/logo.png" />
          <meta itemprop="name" content="منصة أحجز دروسك للطلاب و المعلمين" />
          <meta itemprop="url" content="https://ahgez.vercel.app" />
          <meta itemprop="author" content="أحجز" />
          <meta itemprop="image" content="/images/logo.png" />
          <meta
            itemprop="description"
            content="منصة أحجز دروسك للطلاب و المعلمين لحجز الدروس من البيت بدون اى تعب"
          />
          <meta name="twitter:image" content="/images/logo.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@alieldeba" />
          <meta name="twitter:creator" content="@alieldeba" />
          <meta
            name="twitter:title"
            content="منصة أحجز دروسك للطلاب و المعلمين"
          />
          <meta name="twitter:image:src" content="/images/logo.png" />
          <meta
            name="twitter:description"
            content="منصة أحجز دروسك للطلاب و المعلمين لحجز الدروس من البيت بدون اى تعب"
          />
          <meta
            name="description"
            content="منصة أحجز دروسك للطلاب و المعلمين لحجز الدروس من البيت بدون اى تعب"
          />
          <link
            rel="icon"
            href="https://mj-gallery.com/55d364e9-c8aa-4f7a-82f9-27874e33cb31/grid_0.png"
          />
          <title>منصة احجز دروسك للطلاب و المعلمين</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
