import { NavLink, useLocation } from "react-router-dom";

export default function NavBar () {

    const location = useLocation();

    if (location.pathname !== '/') {
        return (
            <div>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/create'>Create Driver</NavLink>
            </div>
        );
    }

    return null;
}