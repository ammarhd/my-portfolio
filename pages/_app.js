import "../styles/globals.css";
import Layout from "../components/layouts/main";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

function Website({ Component, pageProps, router }) {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        id="script1"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="script2" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default Website;
