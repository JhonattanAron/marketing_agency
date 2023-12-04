import Error404 from "containers/errors/Error404";

import store from "store";
import { Provider } from "react-redux";

import Home from "containers/pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "containers/pages/About";
import Blog from "containers/pages/Blog";
import Carrers from "containers/pages/Carrers";
import Cases from "containers/pages/Cases";
import Contact from "containers/pages/Contact";
import Services from "containers/pages/Services";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display*/}
          <Route path="*" element={<Error404 />} />
          {/*Home display*/}
          <Route path="/" element={<Home />} />
          {/*About display*/}
          <Route path="/nosotros" element={<About />} />
          {/*Blog display*/}
          <Route path="/blog" element={<Blog />} />
          {/*Carreras display*/}
          <Route path="/carreras" element={<Carrers />} />
          {/*Casos display*/}
          <Route path="/casos" element={<Cases />} />
          {/*Contacto display*/}
          <Route path="/contacto" element={<Contact />} />
          {/*Servicios display*/}
          <Route path="/servicios" element={<Services />} />

        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
