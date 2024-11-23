import { ThemState } from "../types/ThemeState.ts";
import { SET_THEME } from "../constants/actionTypes.ts";
import { ThemeActionTypes } from "../actions/themeActions.ts";

// Initial State
const initialState: ThemState = {
  theme: "light",
};

export default function theme(
  state = initialState,
  action: ThemeActionTypes
): ThemState {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
}
