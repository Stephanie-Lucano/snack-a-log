import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/">
        <button>Snack a Log</button>
      </Link>
      <Link to="/snacks">
        <button>All Snacks</button>
      </Link>
      <Link to="/snacks/new">
        <button>Log a New Snack</button>
      </Link>
    </nav>
  );
}
