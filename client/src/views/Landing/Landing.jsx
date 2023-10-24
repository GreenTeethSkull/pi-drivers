import { Link } from "react-router-dom";

export default function Landing () {
    return (
        <div>
            <div>Landing</div>
            <button>
                <Link to="/home">
                    START RACE
                </Link>
            </button>
        </div>
    );
}