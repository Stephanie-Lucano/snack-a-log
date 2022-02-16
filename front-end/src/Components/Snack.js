import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

export default function Snack({ snack }) {
  return (
    <div>
      <img src={snack.image} alt="healthy food" />
      <HeartHealth snackHealth={snack.is_healthy} />
      <Link to={`/snacks/${snack.id}`}>
        <h4>{snack.name}</h4>
      </Link>
    </div>
  );
}
