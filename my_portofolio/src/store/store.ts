import { legacy_createStore as createStore, Store } from "redux";
import reducer from "../reducers/index.js";
import { AppState } from "../types/AppState.ts";

const store: Store<AppState> = createStore(reducer);

export default store;
