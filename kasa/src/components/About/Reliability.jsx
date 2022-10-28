import { useState } from 'react';
import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css');


const Reliability = () => {
    const [isOpen, setIsOpen] = useState(false)
 
    return isOpen ? (
        <div className='about-component'>
            <div className='about-wrapper' onClick={() => setIsOpen(false)}>Fiabilité</div>
            <p>Blablabla</p>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Fiabilité</button>
    )
}

export default Reliability