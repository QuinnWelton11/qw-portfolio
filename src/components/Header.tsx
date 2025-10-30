import Logo from "./Logo";

function Header() {
  return (
    <>
      <header className="text-white bg-white/10 backdrop-blur-xs sticky top-0 z-20 mx-auto flex w-full items-center justify-between border border-cyan-300/20 p-5">
        <Logo />
        <h1>Header</h1>
      </header>
    </>
  );
}

export default Header;
