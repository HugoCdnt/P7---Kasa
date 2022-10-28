import logo from '../images/LOGO.svg';
import NavBar from './NavBar';
// import banner_img from '../images/Background.jpg';
import '../styles/Header.css';

// const Header = () => {
//     return (
//         <div className='header'>
//             <header>
//                 {/* <div className='logo'> */}
//                     <img className='logo' src={logo} alt={`Logo KASA`} />
//                 {/* </div> */}
//                 <ul className='menu'>
//                     <li><a href='/'>Accueil</a></li>
//                     <li><a href='/about'>A propos</a></li>
//                 </ul>
//             </header>
//             <div className='banner'>
//                 {/* <img className='banner-img' src={banner_img} alt={`Fond bannière`} /> */}
//                 <h1>Chez vous, partout et ailleurs</h1>
//             </div>
//         </div>
//     )
// }

const Header = () => {
    return (
        <div className='header'>
            <header>
                {/* <div className='logo'> */}
                    <img className='logo' src={logo} alt={`Logo KASA`} />
                {/* </div> */}
                <NavBar />
            </header>
                <div className='banner'>
                    {/* <img className='banner-img' src={banner_img} alt={`Fond bannière`} /> */}
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
        </div>
    )
}

export default Header;