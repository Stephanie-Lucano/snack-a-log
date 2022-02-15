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
      .then((response) => setSnack(response.data))
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
    <div>
      <HeartHealth />
      <h2>{snack.name}</h2>
      <p>{snack.image}</p>
      <p>Protein: {snack.protein}</p>
      <p>Fiber: {snack.fiber}</p>
      <p>Added Sugar: {snack.added_sugar}</p>
      <Link to="/snacks">
        <button>Back</button>
      </Link>
      <Link to={`/snacks/${snack.id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
