import { combineReducers } from "redux";
import cursosReducer from "./reducers/cursosSlice";
import beneficiosCursosReducer from "./reducers/BeneficiosSlice";

const RootReducer = combineReducers({
  cursos: cursosReducer,
  cursosBeneficios: beneficiosCursosReducer,
});

export default RootReducer;
