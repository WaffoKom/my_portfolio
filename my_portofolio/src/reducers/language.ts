import { TranslationState } from "../types/LanguageState.ts";
import { TranslationActionTypes } from "../actions/languageAction.ts";
import { SET_LANGUAGE } from "../constants/actionTypes.ts";
import i18n from "../i18next.ts";

const savedLanguage = localStorage.getItem("language");

const initialState: TranslationState = {
  currentLanguage: savedLanguage ? savedLanguage : "en",
};

export default function language(
  state = initialState,
  action: TranslationActionTypes
): TranslationState {
  switch (action.type) {
    case SET_LANGUAGE:
      i18n.changeLanguage(action.payload);
      return {
        ...state,
        currentLanguage: action.payload,
      };

    default:
      return state;
  }
}
