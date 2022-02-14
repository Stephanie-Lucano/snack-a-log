import { Link } from "react-router-dom";

export default function SnackDetails() {
    return (
        <div>
            <p>Snack name</p>
            <p>Snack fiber</p>
            <p>Snack protein</p>
            <p>Snack added_sugar</p>
            <p>Snack is_healthy</p>
            <p>Snack image</p>
            <button>Delete</button>
            <Link to="/snacks">
                <button>Back</button>
            </Link>
            <Link to="/snacks/:id/edit">
                <button>Edit</button>
            </Link>
        </div>
    )
}