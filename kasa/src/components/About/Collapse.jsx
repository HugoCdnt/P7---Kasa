import { useState } from 'react';
import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css');

const Collapse = ({ title, description }) => {
    const [isOpen, setIsOpen] = useState(false)
 
    return (
        <ul>
            <li>
                <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
                { isOpen && (<div>{description}</div>)}
            </li>
        </ul>
    )
}

export default Collapse