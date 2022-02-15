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
      <a>
        <button href="/snacks/new">Log a New Snack</button>
      </a>
    </nav>
  );
}
