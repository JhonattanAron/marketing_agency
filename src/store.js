import {createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers'
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];


const store = createStore(
  rootReducer,
  initialState,
  /*Si queremos que devTool este desactivo */
  //applyMiddleware(...middleware),
  /*Si queremos que devTool este Activo*/ 
  composeWithDevTools(applyMiddleware(...middleware))
);


export default store;