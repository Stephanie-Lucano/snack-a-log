import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import HeartHealth from "./HeartHealth";

export default function SnackDetails() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const [snack, setSnack] = useState({});

  useEffect(() => {
    axios
      .get(`${URL}/snacks/${id}`)
      .then((response) => setSnack(response.data.payload))
      .catch((error) => console.warn(error));
  }, [URL, id]);

  const handleDelete = () => {
    axios
      .delete(`${URL}/snacks/${id}`)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn(error));
  };

  return (
    <article>
      <aside>
        <HeartHealth snackHealth={snack.is_healthy} />
      </aside>
      <div>
        <h5>{snack.name}</h5>
        <img src={snack.image} alt={snack.name} />
        <h6>Protein: {snack.protein}</h6>
        <h6>Fiber: {snack.fiber}</h6>
        <h6>Added Sugar: {snack.added_sugar}</h6>
      </div>
      <div className="showNavigation">
        <a href="/snacks">
          <button>Back</button>
        </a>
        <Link to={`/snacks/${snack.id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </article>
  );
}
