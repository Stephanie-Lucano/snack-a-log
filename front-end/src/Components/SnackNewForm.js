import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SnackNewForm() {
    const URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [ snack, setSnack ] = useState({
        name: "",
        fiber: 0,
        protein: 0,
        added_sugar: 0,
        is_healthy: false,
        image: ""
    });
    
    const handleTextChange = (event) => {
        event.preventDefault()
        setSnack({...snack, [event.target.id]: event.target.value})
    }
    const handleCheckboxChange = (event) => {
        event.preventDefault()
        console.log(event)
        setSnack({...snack, [event.target.id]: !event.target.value})
        console.log(snack.is_healthy)
    }
    const handleClearAll = (event) => {
        event.preventDefault()
        setSnack({
            name: "",
            fiber: 0,
            protein: 0,
            added_sugar: 0,
            is_healthy: false,
            image: ""
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
        .post(`${URL}/snacks`, snack)
        .then(() => navigate("/snacks"))
        .catch((error) => console.log(error))
    }
    return (
        <div>
            <form>
                <label htmlFor="name">Name</label>
                <input 
                id="name"
                value={snack.name}
                type="text"
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="fiber">Fiber</label>
                <input 
                id="fiber"
                value={snack.fiber}
                type="number"
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="protein">Protein</label>
                <input 
                id="protein"
                value={snack.protein}
                type="number"
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="added_sugar">Added Sugar</label>
                <input 
                id="added_sugar"
                value={snack.added_sugar}
                type="number"
                onChange={handleTextChange}
                required
                ></input>
                <label htmlFor="is_healthy">Is Healthy</label>
                <input 
                id="is_healthy"
                value={snack.is_healthy}
                type="checkbox"
                onChange={handleCheckboxChange}
                ></input>
                <label htmlFor="image">Image</label>
                <input 
                id="image"
                value={snack.image}
                type="text"
                placeholder="http://"
                onChange={handleTextChange}
                required
                ></input>
            </form>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleClearAll}>Clear All</button>
            <Link to="/snacks">
                <button>Back</button>
            </Link>
        </div>
    )
}