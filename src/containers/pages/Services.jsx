import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/services/header";
import WebServices from "components/services/WebServices";
import BlockChainService from "components/services/BlockChainServices";

function Services() {
  return (
    <>
      <Navbar />
      <Layout>
        <div className="pt-28">
          <Header />
          <WebServices/>
          <WebServices position="ml-auto"/>
          <BlockChainService />
        </div>
      </Layout>
      <Footer />
    </>
  );
}

export default Services;
