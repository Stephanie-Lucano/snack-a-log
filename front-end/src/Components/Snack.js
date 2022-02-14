import { Link } from "react-router-dom";

export default function Snack() {
    return (
        <div>
            <p>List of snacks</p>
            <p>Snack name, is_healthy, image</p>
            <Link to="/snacks/:id">
                <button>View 🔍</button>
            </Link>
        </div>
    )
}