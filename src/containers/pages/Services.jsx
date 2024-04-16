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
  const serviciosWeb = {
    tittle: "Servicios Web",
    subtitlle: "Soluciones Web a tu Alcance",
    description: `En AdaptLeap, nos especializamos en ofrecer una amplia gama de servicios centrados en el desarrollo web. Ya sea que necesites crear un sitio web desde cero, mejorar tu presencia en línea o implementar soluciones web avanzadas, estamos aquí para brindarte asesoramiento y soporte especializado en el emocionante mundo de la web.`,
    beneficios: [
      "Desarrollo de Sitios Web Personalizados",
      "Optimización de la Experiencia de Usuario (UX)",
      "Integración de Funcionalidades Avanzadas",
      "Consultoría en Estrategias Web",
    ],
    imagenes: [
      "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
};
const serviciosIA = {
  tittle: "Inteligencia Artificial",
  subtitlle: "Soluciones Avanzadas de IA",
  description: `En AdaptLeap, nos especializamos en ofrecer una amplia gama de servicios centrados en la inteligencia artificial. Ya sea que necesites desarrollar modelos de aprendizaje automático personalizados, implementar soluciones de procesamiento de lenguaje natural o mejorar la automatización en tu empresa, estamos aquí para brindarte asesoramiento y soporte especializado en el emocionante mundo de la IA.`,
  beneficios: [
    "Desarrollo de Modelos de Aprendizaje Automático",
    "Procesamiento de Lenguaje Natural (NLP)",
    "Automatización de Procesos Empresariales",
    "Consultoría en Estrategias de IA",
  ],
  imagenes: [
    "https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
};



  return (
    <>
      <Navbar />
      <Layout>
        <div className="pt-28 bg-blue-950">
          <Header />
          <BlockChainService data={serviciosWeb} />
          <BlockChainService data={blockchain} />
          <BlockChainService data={serviciosIA} />
        </div>
      </Layout>
      <Footer />
      <BotonWhastApp />
    </>
  );
}

export default Services;
