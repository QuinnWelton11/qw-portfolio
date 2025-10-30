import { NavLink } from "react-router-dom";
import {
  House,
  FolderDot,
  FolderOpenDot,
  Code,
  CircleUserRound,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

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

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-end">
        <div className="hidden md:flex w-full justify-between gap-5">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-col basis-full items-end gap-y-5 mt-3 border-t-2 pt-5 pb-1 border-cyan-300/50">
          <NavLinks />
        </div>
      )}
    </>
  );
}

export default Nav;
