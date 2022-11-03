import { useState } from 'react';
import ('/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css');

// const Wrapper = ({ title }) => {
//     const [isOpen, setIsOpen] = useState(false)
 
//     return isOpen ? (
//         <div className='wrapper'>
//             <div className='about-wrapper' onClick={() => setIsOpen(false)}>{title}</div>
//             <p>Blablabla</p>
//         </div>
//     ) : (
//         <button onClick={() => setIsOpen(true)}>{title}</button>
//     )
// }

const Wrapper = ({ titles }) => {
    const [isOpen, setIsOpen] = useState(false)
 
    return (
        <ul>
            {titles.map(title => 
                <li>
                    {isOpen ? (
                        <div className='wrapper'>
                            <div className='about-wrapper' onClick={() => setIsOpen(false)}>{title}</div>
                            <p>Blablabla</p>
                        </div>
                        ) : (
                        <button onClick={() => setIsOpen(true)}>{title}</button>
                        )
                    }
                </li>
            )}
        </ul>
    )
}

    //       titles.map(title => isOpen ? (
    //         <div className='wrapper'>
    //             <div className='about-wrapper' onClick={() => setIsOpen(false)}>{title}</div>
    //             <p>Blablabla</p>
    //         </div>
    //     ) : (
    //         <button onClick={() => setIsOpen(true)}>{title}</button>
    //     )’
    //   )
    //       titles.map(title => isOpen ? (
    //         <div className='wrapper'>
    //             <div className='about-wrapper' onClick={() => setIsOpen(false)}>{title}</div>
    //             <p>Blablabla</p>
    //         </div>
    //     ) : (
    //         <button onClick={() => setIsOpen(true)}>{title}</button>
    //     )
    //   )

export default Wrapper