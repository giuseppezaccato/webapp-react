import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <ul
                className="nav justify-content-center my-3"
            >
                <li className="nav-item">
                    <NavLink className="nav-link" to="/" > HOME </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link">LIST</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link"> MOVIES </NavLink>
                </li>
                <li className="nav-item">
                    <form class="d-flex my-2 my-lg-0">
                        <input
                            class="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            class="btn btn-outline-warning my-2 my-sm-0"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>

                </li>
            </ul >


        </header >





    )
}