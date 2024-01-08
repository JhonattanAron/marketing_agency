import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/services/header";
import WebServices from "components/services/WebServices";

function Services() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="pt-28">
          <Header />
          <WebServices />
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Services;
