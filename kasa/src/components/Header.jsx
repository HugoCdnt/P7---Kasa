import logo from '../images/LOGO.svg';
import NavBar from './NavBar';
// import banner_img from '../images/Background.jpg';
import '../styles/Header.css';


const Header = () => {
    return (
        <div className='header'>
            <header>
                {/* <div className='logo'> */}
                    <img className='logo' src={logo} alt={`Logo KASA`} />
                {/* </div> */}
                <NavBar />
            </header>
        </div>
    )
}

export default Header;