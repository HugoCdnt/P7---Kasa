import { NavLink } from "react-router-dom";

// STYLES //
import '../../styles/Home/LodgingCard.css'

const LodgingCard = ({ cover, title, id }) => {
    // const url = "/" + id;
    const url = "/id/" + id;

    return (
        <li className='lodging-card' key={id}>
            <NavLink
                to= {url} end
                style={{ textDecoration: 'none' }}
                >
                <img className='lodging-card--cover' src={cover} alt={`${title} cover`}/>
                <p>{title}</p>
            </NavLink>
        </li>
    )
}

export default LodgingCard