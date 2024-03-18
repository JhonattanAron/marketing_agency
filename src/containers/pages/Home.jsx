import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/home/Header";
import IncentivesHome from "components/home/Incentives";
import BlogSectionHome from "components/home/BlogSection";
import Features from "components/home/Features";
import CTA from "components/home/CTA";
import LogoCloud from "components/home/LogoCloud";
import BlogList from "components/home/BlogList";
import Navbar from "components/navigation/Navbar";
import BotonWhastApp from "components/navigation/BotonWhastApp";

function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-28">
        <Layout>
          <Header />
          <IncentivesHome />
          <BlogSectionHome />
          <Features />
          <CTA />
          <LogoCloud />
          <BlogList />
        </Layout>
      </div>
      <Footer />
      <BotonWhastApp />
    </>
  );
}

export default Home;
