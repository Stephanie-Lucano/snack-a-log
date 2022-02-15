import Snack from "./Snack";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Snacks() {
  const [snacks, setSnacks] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/snacks`)
      .then((response) => setSnacks(response.data.payload))
      .catch((error) => console.warn(error));
  }, [URL]);

  return (
    <div>
      <article>
        <div>
          {snacks.map((snack) => {
            return <Snack key={snack.id} snack={snack} />;
          })}
        </div>
      </article>
    </div>
  );
}
