import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

export default function Snack({ snack }) {
  return (
    <div>
      <img src={snack.image} alt={snack.name} />
      <HeartHealth snackHealth={snack.is_healthy} />
      <Link to={`/snacks/${snack.id}`}>
        <p>{snack.name}</p>
      </Link>
    </div>
  );
}
