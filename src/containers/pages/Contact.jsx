import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <Layout>
        <div className="pt-28">Contact</div>
      </Layout>
      <Footer />
    </>
  );
}

export default Contact;
