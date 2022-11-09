import { NavLink } from "react-router-dom";

// import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/LodgingItem.css';
import '../../styles/LodgingItem.css'

const LodgingItem = ({ cover, title, id }) => {
    const url = "/" + id;

    return (
        <li className='lodging-item' key={id}>
            <NavLink
                to= {url} end
                style={{ textDecoration: 'none' }}
                >
                <img className='lodging-item-cover' src={cover} alt={`${title} cover`} />
                <p>{title}</p>
            </NavLink>
        </li>
    )
}

export default LodgingItem