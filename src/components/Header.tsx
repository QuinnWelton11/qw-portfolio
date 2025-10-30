import Logo from "./Logo";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <header className="text-white bg-slate-900/10 backdrop-blur-sm top-0 flex-wrap z-20  flex max-w-6xl items-center justify-between border-2 border-cyan-300/20 pl-4 pr-10 py-5 rounded-full mt-5 mb-5 mx-3">
        <Logo />
        <Nav />
      </header>
    </>
  );
}

export default Header;
