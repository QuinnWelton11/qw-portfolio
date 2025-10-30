import Logo from "./Logo";
import { CircleUserRound, House, FolderDot, Code } from "lucide-react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <>
      <NavLink
        to="/"
        className="flex flex-row items-center gap-1.5 text-lg hover:text-cyan-50 hover:text-shadow-cyan-300/20 hover:text-shadow-md hover:text-xl"
      >
        <House className="w-4 h-4" />
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className="flex flex-row items-center gap-1.5 text-lg hover:text-cyan-50 hover:text-shadow-cyan-300/20 hover:text-shadow-md hover:text-xl"
      >
        <FolderDot className="w-4 h-4" />
        Projects
      </NavLink>
      <NavLink
        to="/stack"
        className="flex flex-row items-center gap-1.5 text-lg hover:text-cyan-50 hover:text-shadow-cyan-300/20 hover:text-shadow-md hover:text-xl"
      >
        <Code className="w-4 h-4" />
        Stack
      </NavLink>
      <NavLink
        to="/about"
        className="flex flex-row items-center gap-1.5 text-lg hover:text-cyan-50 hover:text-shadow-cyan-300/20 hover:text-shadow-md hover:text-xl"
      >
        <CircleUserRound className="w-4 h-4" />
        About
      </NavLink>
    </>
  );
};

function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 border-t-2 py-10 px-3 mt-10 gap-5 border-cyan-300 items-center justify-between text-white">
      <div className="flex justify-center">
        <Logo />
      </div>

      <div className="flex flex-row gap-3 justify-center">
        <NavLinks />
      </div>

      <div className="text-center">
        <p>Copyright &copy; 2025 My Website.</p>
      </div>
    </footer>
  );
}

export default Footer;
