import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";

function Carrers() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Carrers
                <Footer />
            </div>
        </Layout>
    )
}

export default Carrers;