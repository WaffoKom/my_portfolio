// import { TestimonialState } from "../types/TestimonyState.ts";
// import { TestimonialsActionTypes } from "../actions/testimonialAction.ts";
// import { LOAD_TESTIMONIALS } from "../constants/actionTypes.ts";

// export const initialState: TestimonialState = {
//   1: {
//     id: 1,
//     author: "John Doe",
//     post: "CEO",
//     content: "Travailler avec vous a été une expérience formidable!",
//     image: "",
//   },
//   2: {
//     id: 2,
//     author: "Jane Smith",
//     post: "Développeur",
//     content: "Votre professionnalisme et vos compétences sont impressionnants.",
//     image: "",
//   },
// };

// export default function testimony(
//   state = initialState,
//   action: TestimonialsActionTypes
// ): TestimonialState {
//   switch (action.type) {
//     case LOAD_TESTIMONIALS:
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// }
