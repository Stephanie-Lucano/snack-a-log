import { Link } from "react-router-dom";

export default function SnackEditForm() {
    return (
        <div>
            <p>Look at all these pre-filled form fields</p>
            <p>I found the typo</p>
            <p>Clicked submit and redirected to /snacks/:id</p>
            <button>Clear All</button>
            <button>Submit</button>
            <Link to="/snacks">
                <button>Back</button>
            </Link>
        </div>
    )
}