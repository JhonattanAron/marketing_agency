import { combineReducers } from "redux";
import cursosReducer from "./cursosSlice";
import beneficiosCursosReducer from "./BeneficiosSlice";

const RootReducer = combineReducers({
  cursos: cursosReducer,
  cursosBeneficios: beneficiosCursosReducer,
});

export default RootReducer;
