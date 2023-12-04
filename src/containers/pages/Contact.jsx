import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";

function Contact() {
    return (
        <Layout>
            <Navbar />
            <div className="pt-28">
                Contact
                <Footer />
            </div>
        </Layout>
    )
}

export default Contact;