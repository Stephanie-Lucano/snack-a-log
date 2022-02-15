import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function SnackEditForm() {
  const URL = process.env.REACT_APP_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    added_sugar: "",
    is_healthy: false,
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${URL}/snacks/${id}`)
      .then((response) => setSnack(response.data));
  }, [URL, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${URL}/snacks/${id}`, snack)
      .then(() => navigate(`/snacks/${id}`));
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: [event.target.value] });
  };

  const handleCheckboxChange = () => {
    setSnack({
      ...snack,
      is_healthy: !snack.is_healthy,
    });
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <label htmlFor="isHealthy">Is it healthy</label>
          <input
            id="isHealthy"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={snack.is_favorite}
          />
          <input
            id="name"
            value={snack.name}
            type="text"
            onChange={handleTextChange}
          />
          <label htmlFor="image">Image</label>
          <input
            id="image"
            type="text"
            onChange={handleTextChange}
            checked={snack.image}
          />
          <label htmlFor="fiber">Fiber</label>
          <input
            id="fiber"
            value={snack.artist}
            type="number"
            onChange={handleTextChange}
          />
          <label htmlFor="protein">Protein</label>
          <input
            id="protein"
            value={snack.album}
            type="number"
            onChange={handleTextChange}
          />
          <label htmlFor="addedSugar">Added Sugar</label>
          <input
            id="addedSugar"
            value={snack.time}
            type="number"
            onChange={handleTextChange}
          />
          <input type="submit" />
        </form>
        <Link to={`/snacks/${id}`}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}
