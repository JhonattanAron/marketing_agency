import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/home/Header";
import IncentivesHome from "components/home/Incentives";
import BlogSectionHome from "components/home/BlogSection";
import Features from "components/home/Features";
import CTA from "components/home/CTA";
import LogoCloud from "components/home/LogoCloud";
import BlogList from "components/home/BlogList";

function Home() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <IncentivesHome />
                <BlogSectionHome />
                <Features />
                <CTA />
                <LogoCloud />
                <BlogList />
            </div>
            <Footer />
        </Layout>
    )
}

export default Home;