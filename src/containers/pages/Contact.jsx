import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/Contacto/Header";
import FomrContact from "components/Contacto/contactoFomr";

function Contact() {
  return (
    <>
      <Navbar />

      <Layout>
        <div className="pt-28">
          <Header />
          <FomrContact />
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Contact;
