import { Link, NavLink } from "react-router-dom";

function HeaderContent() {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand">Navbar</a>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <NavLink to="/HomePage">Home Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/About Us">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/PostList">Post List</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>

        </header >
    )
};



export default HeaderContent
