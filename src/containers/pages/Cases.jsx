import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";

function Cases() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Cases
                <Footer />
            </div>
        </Layout>
    )
}

export default Cases;