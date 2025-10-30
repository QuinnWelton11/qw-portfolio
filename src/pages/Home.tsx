import { Link } from "react-router-dom";
import Headshot from "../assets/qw-hs-img.webp";
import { projectsData } from "../data/featuredProjectsData";

export default function Home() {
  return (
    <div className="text-white max-w-6xl px-4 mx-auto space-y-10">
      <section className="flex flex-col md:flex-row justify-center bg-slate-900/20 backdrop-blur-sm border-2 border-cyan-300/20 shadow-cyan-300/10 shadow-md rounded-2xl l p-4 gap-3">
        <img
          src={Headshot}
          alt=""
          className="md:max-w-xs rounded-2xl shadow-cyan-300/10 shadow-md"
        />
        <div className="mt-2 flex flex-col justify-between">
          <h2 className="text-xl text-cyan-200 mb-3">
            Quinn Welton - Front-End Web Developer
          </h2>

          <p className="md:text-left mr-5">
            I am a Front-End Web Developer and Designer, with experience using
            React, HTML5, CSS3, JavaScript, Figma, and more! I'm currently
            seeking employment in an entry-level front-end role.{" "}
            <span className="text-amber-300 font-semibold">
              This portfolio is currently unfinished, please check back soon to
              see the final version.
            </span>
          </p>

          <button className="bg-cyan-800 border-2 border-cyan-300/30 shadow-cyan-300/20 shadow-md w-full px-5 py-2 rounded-full hover:bg-cyan-900 hover:py-2.5 hover:shadow-lg mt-5">
            <Link to="/about" className="text-lg font-semibold">
              Learn More
            </Link>
          </button>
        </div>
      </section>

      <section
        id="featured_projects"
        className="grid md:grid-cols-3 bg-slate-900/20 backdrop-blur-sm border-2 border-cyan-300/20 shadow-cyan-300/10 shadow-md rounded-2xl l p-4 gap-3"
      >
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="flex flex-col items-center justify-between border-2 border-cyan-300/20 rounded-2xl shadow-md shadow-cyan-300/10 p-5 gap-3"
          >
            <img
              src={project.image}
              alt=""
              className="rounded-2xl shadow-cyan-300/10 shadow-md"
            />
            <h2 className="text-xl text-cyan-200">{project.title}</h2>
            <p className="text-shadow-lg">{project.description}</p>
            <button className="bg-cyan-800 border-2 border-cyan-300/30 shadow-cyan-300/20 shadow-md w-full px-5 py-2 rounded-full hover:bg-cyan-900 hover:py-2.5 hover:shadow-lg mt-4">
              <Link to={project.link}>View Project</Link>
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}
