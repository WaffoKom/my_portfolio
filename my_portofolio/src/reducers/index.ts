import { combineReducers } from "redux";
import language from "./language.js";
import testimony from "./testimony.js";
import theme from "./theme.js";

export default combineReducers({
  language,
  testimony,
  theme,
});
