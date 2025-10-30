import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <header className="text-white bg-blue-400/10 backdrop-blur-sm z-20 pl-4 pr-10 py-5 mb-5 border-b-2 border-cyan-400/20 shadow-cyan-400/20 shadow-md">
        <div className="flex flex-row flex-wrap justify-between items-center max-w-6xl mx-auto md:px-4">
          <Logo />
          <Nav />
        </div>
      </header>
    </>
  );
}

export default Header;
