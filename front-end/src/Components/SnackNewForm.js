import { Link } from "react-router-dom";

export default function SnackNewForm() {
    return (
        <div>
            <p>Look at all these empty form fields</p>
            <p>Complete and Submit</p>
            <button>Clear All</button>
            <button>Submit</button>
            <Link to="/snacks">
                <button>Back</button>
            </Link>
        </div>
    )
}