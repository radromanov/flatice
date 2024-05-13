import { Link } from "@tanstack/react-router";

function Navbar() {
  return (
    <header>
      <nav className="p-2 flex justify-between">
        <div>Logo</div>
        <div className="flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
          <Link to="/expenses" className="[&.active]:font-bold">
            Expenses
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
