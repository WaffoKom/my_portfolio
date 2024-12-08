import { legacy_createStore as createStore, Store } from "redux";
import reducer from "../reducers/index.js";
import { AppState } from "../types/AppState.ts";
import { ThemeActionTypes } from "../actions/themeActions.ts";
import { TranslationActionTypes } from "../actions/languageAction.ts";
import { TestimonialsActionTypes } from "../actions/testimonialAction.ts";

export type AppActions =
  | ThemeActionTypes
  | TranslationActionTypes
  | TestimonialsActionTypes;

const store: Store<AppState, AppActions> = createStore(reducer);
export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
