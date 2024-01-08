import RoutesAnimated from "hocs/routes/RoutesAnimated";
import store from "store";
import { Provider } from "react-redux";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <RoutesAnimated />
      </Router>
    </Provider>
  );
}

export default App;
