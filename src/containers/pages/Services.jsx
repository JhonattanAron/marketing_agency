import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/services/header";

function Services() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                <Header />
                <Footer />
            </div>
        </Layout>
    )
}

export default Services;