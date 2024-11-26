export interface TranslationState {
  currentLanguage: string;
  translation: { [key: string]: { [key: string]: string } };
}

// exeample of object translation

export const translations = {
  en: {
    welcome: "welcome",
    home: "home",
  },
  fr: {
    Bienvenue: "Bienvenue",
    Accueil: "Accueil",
  },
};
