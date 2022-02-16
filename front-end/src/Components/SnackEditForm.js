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
      .then((response) => setSnack(response.data.payload));
  }, [URL, id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${URL}/snacks/${id}`, snack).then(() => navigate(`/snacks`));
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="isHealthy">Is it healthy</label>
        <input
          id="isHealthy"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={snack.is_healthy}
        />
        <label htmlFor="name">Name</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="image">Image</label>
        <input
          id="image"
          value={snack.image}
          type="text"
          onChange={handleTextChange}
        />
        <label htmlFor="fiber">Fiber</label>
        <input
          id="fiber"
          value={snack.fiber}
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="protein">Protein</label>
        <input
          id="protein"
          value={snack.protein}
          type="number"
          onChange={handleTextChange}
        />
        <label htmlFor="added_sugar">Added Sugar</label>
        <input
          id="added_sugar"
          value={snack.added_sugar}
          type="number"
          onChange={handleTextChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Link to={`/snacks/${id}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
