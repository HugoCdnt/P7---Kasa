import { useState } from 'react';
import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css');

const Responsability = () => {
    const [isOpen, setIsOpen] = useState(false)
 
    return isOpen ? (
        <div className='about-component'>
            <div className='about-wrapper' onClick={() => setIsOpen(false)}>Responsabilité</div>
            <p>Blablabla</p>
        </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Responsabilité</button>
    )
}

export default Responsability