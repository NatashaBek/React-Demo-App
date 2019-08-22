import { createStore } from "redux";
import rotateReducer from "../src/reducers/rotateReducer";

function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer,state);
}

export default configureStore;