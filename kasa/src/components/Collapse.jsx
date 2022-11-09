import { useState, useEffect } from 'react';
// import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css');
// import arrow from '../images/arrow.svg'
import arrow from '../images/arrow.svg'
// import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/Collapse.css');
import '../styles/Collapse.css';


const Collapse = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false)

    const arrowUp = <img src={arrow} alt='arrow' className='arrow'/>
    const arrowDown = <img src={arrow} alt='arrow' className='arrow  arrow-down'/>
    
    // useEffect(() => {
    //     console.log("Ceci est un test")
    // }, [isOpen])
 
    // return (
    //     // <ul>
    //         <div className='collapse'>
    //             <button className='collapse-button' onClick={() => setIsOpen(!isOpen)}>{title}<img src={arrow} alt='arrow' className='arrow  arrow-bottom'/></button>
    //             {/* <img src={arrow} alt='arrow-vector' /> */}
    //             { isOpen && <img src={arrow} alt='arrow' className='arrow'/> && (<p className='collapse-description'>{description}</p>)}
    //         </div>
    //     // </ul>
    // )


    return !isOpen ? (
        <div className='collapse'>
            <button 
                className='collapse-button'
                onClick={() => setIsOpen(true)}
            >{title}{arrowDown}</button>
        </div>
    ) : (
        <div>
            <button 
                className='collapse-button'
                onClick={() => setIsOpen(false)}
            >{title}{arrowUp}</button>
            <p className='collapse-description'>{description}</p>
        </div>
    ) 

}

export default Collapse