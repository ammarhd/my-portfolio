import Head from "next/head";
import Navbar from "../navbar";

const Main = ({ children, router }) => {
  return (
    <div className="pb-8">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ammar's homepage" />
        <meta name="author" content="Ammar Aldhahyani" />
        <meta name="twitter:site" content="@ammar_aldahiani" />
        <meta name="twitter:creator" content="@ammar_aldahiani" />
        <meta property="og:site_name" content="Ammar Aldhahyani's Homepage" />
        <meta property="og:type" content="website" />
        <title>Ammar Aldhahyani - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <div className="mt-10 px-4 mx-auto max-w-screen-lg ">{children}</div>
    </div>
  );
};

export default Main;
