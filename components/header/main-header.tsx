import Logo from "./logo";
import Navigation from "./main-nav";

const Header = () => {
  return (
    <header className="flex flex-shrink border border-b-neutral-300 py-1">
      <Logo />

      <div className="flex flex-grow" />

      <Navigation />
    </header>
  );
};

export default Header;
