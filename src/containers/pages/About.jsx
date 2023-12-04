import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";

function About() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                About
                <Footer />
            </div>
        </Layout>
    )
}

export default About;