export interface Testiomonial {
  id: number;
  author: string;
  content: string;
  image: string;
}
export interface TestimonialState {
  [id: number]: Testiomonial;
}
