import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/layout";
import Footer from "components/navigation/Footer";
import Header from "components/services/header";
import BlockChainService from "components/services/BlockChainServices";
import BotonWhastApp from "components/navigation/BotonWhastApp";

function Services() {
  const blockchain = {
    tittle: "BlockChain",
    subtitlle: "Servicios Enfocados a la BlockChain",
    description: `En AdaptLeap, nos especializamos en ofrecer una amplia gama de
    servicios centrados en la tecnología blockchain. Ya sea que
    busques mejorar tu aplicación actual, desarrollar una nueva
    aplicación, implementar contratos inteligentes u otras soluciones,
    estamos aquí para brindarte asesoramiento y soporte especializado
    en el emocionante mundo de la blockchain.`,
    beneficios: [
      "Desarrollo de Aplicaciones Descentralizadas (DApps)",
      "Implementación de Contratos Inteligentes",
      "Consultoría en Blockchain",
      "Auditoría de Seguridad Blockchain",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1642751227050-feb02d648136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  };

  return (
    <>
      <Navbar />
      <Layout>
        <div className="pt-28">
          <Header />
          <BlockChainService data={blockchain} />

          <BlockChainService data={blockchain} />
        </div>
      </Layout>
      <Footer />
      <BotonWhastApp />
    </>
  );
}

export default Services;
