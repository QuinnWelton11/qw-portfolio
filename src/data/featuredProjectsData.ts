import MexacleanImg from "../assets/mc-exp.webp";
import TerrafamImg from "../assets/tf-exp.webp";
import MovieDbImg from "../assets/mov-db-exp.webp";

export const projectsData = [
  {
    id: 1,
    image: MexacleanImg,
    title: "Mexaclean",
    description:
      "A custom designed website for a local cleaning business in Vancouver, BC. This website features a custom admin dashboard using Supabase, and a contact form powered by EmailJS",
    link: "https://github.com/QuinnWelton11/mexaclean",
  },
  {
    id: 2,
    image: TerrafamImg,
    title: "Terrafamilia",
    description:
      "A custom designed forum featuring user login, authentication, post creation, post editing, and more! Powered by React, Supabase and Tailwindcss.",
    link: "https://terrafamilia.net",
  },
  {
    id: 3,
    image: MovieDbImg,
    title: "Movie Database",
    description:
      "A school project with the goal being learning how to integrate API's into your website, in this case, I used TMDB's API to create a movie database.",
    link: "https://github.com/QuinnWelton11/movieDatabase",
  },
];
