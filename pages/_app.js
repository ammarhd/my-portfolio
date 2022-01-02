import "../styles/globals.css";
import Layout from "../components/layouts/main";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

import { useRouter } from "next/router";
import { useEffect } from "react";
import * as ga from "../lib/analytics";

function Website({ Component, pageProps, router }) {
  const router2 = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router2.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router2.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router2.events]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Layout router={router}>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default Website;
