import { ThemState } from "./ThemeState.ts";
import { TestimonialState } from "./TestimonyState.ts";
import { TranslationState } from "./LanguageState.ts";

export interface AppState {
  theme: ThemState;
  testimonial: TestimonialState;
  translation: TranslationState;
}
