import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
import Reducer from "./Reducer";
import Saga from "./Saga";

const middlewares = [];
// if (process.env.NODE_ENV === "development") {
//   middlewares.push(logger);
// }
const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducer, applyMiddleware(...middlewares, sagaMiddleware));

sagaMiddleware.run(Saga);

export default store;
