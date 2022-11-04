import { NavLink } from "react-router-dom";

const NavBar = () => {

    let activeStyle = {
        textDecoration: "underline",
      };

    return (
        <nav>
            <ul className="nav">
                <li>
                    <NavLink 
                        to="/" end
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/about" 
                        style={({ isActive }) => isActive ? activeStyle : undefined}
                    >
                        A propos
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar