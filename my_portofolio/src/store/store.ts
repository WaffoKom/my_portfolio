import { legacy_createStore as createStore, Store } from "redux";
import reducer from "../reducers/index.js";

interface AppState {}

const store: Store<AppState> = createStore(reducer);

export default store;
