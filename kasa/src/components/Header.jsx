import { NavLink } from "react-router-dom";

import logo from '../images/LOGO.svg';
import NavBar from './NavBar';
// import banner_img from '../images/Background.jpg';
import '../styles/Header.css';


const Header = () => {
    return (
        <div className='header'>
            <header>
                {/* <div className='logo'> */}
                    {/* <img className='logo' src={logo} alt={`Logo KASA`} /> */}
                {/* </div> */}
                <NavLink to="/" end>
                        <img className='logo' src={logo} alt={`Logo KASA`} />
                </NavLink>
                <NavBar />
            </header>
        </div>
    )
}

export default Header;