import Logo from "./logo";
import Navigation from "./main-nav";

const Header = () => {
  return (
    <header className="flex flex-shrink container h-12 py-2">
      <Logo />

      <div className="flex flex-grow" />

      <Navigation />
    </header>
  );
};

export default Header;
