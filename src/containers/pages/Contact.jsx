import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import FomrContact from "components/Contacto/contactoFomr";

function Contact() {
  return (
    <>
      <Navbar />

      <Layout>
        <div className="py-28 bg-contact">
          <FomrContact />
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Contact;
