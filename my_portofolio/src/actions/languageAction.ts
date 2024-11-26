import { SET_LANGUAGE } from "../constants/actionTypes";

export interface SetTranslationAction {
  type: typeof SET_LANGUAGE;
  payload: string;
}
// An alias
export type TranslationActionTypes = SetTranslationAction;

// Action creator for changing language

export const setLanguage = (language: string): TranslationActionTypes => ({
  type: SET_LANGUAGE,
  payload: language,
});
