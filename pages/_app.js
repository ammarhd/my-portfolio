import "../styles/globals.css";
import Layout from "../components/layouts/main";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";

function Website({ Component, pageProps, router }) {
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
