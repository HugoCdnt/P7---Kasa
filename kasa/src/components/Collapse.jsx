import { useState } from 'react';
// import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css');
import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/Collapse.css');

const Collapse = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(true)
 
    return (
        // <ul>
            <div className='collapse'>
                <button className='collapse-button' onClick={() => setIsOpen(!isOpen)}>{title}</button>
                { isOpen && (<p className='collapse-description'>{description}</p>)}
            </div>
        // </ul>
    )
}

export default Collapse