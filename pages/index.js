import Head from "next/head";

import About from "../components/about";
import Projects from "../components/work";
import Layout from "../components/layouts/article";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Review from "../components/review";

export default function Home() {
  return (
    <Layout>
      <div className="w-full font-sans">
        <About />
        <Review />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </Layout>
  );
}
