import { useState } from 'react';

const WrapperContent = ({ title }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <li className='wrapper-content' key={title}>
            {isOpen ? (
                <div>
                    <button onClick={() => setIsOpen(false)}>{title}</button>
                    <p>Blablabla</p>
                </div>
            ) : (
                <button onClick={() => setIsOpen(true)}>{title}</button>
            )
        }
        </li>
    )
}

export default WrapperContent