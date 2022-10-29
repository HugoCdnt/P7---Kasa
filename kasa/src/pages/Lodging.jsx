import React from 'react'
import { useParams } from 'react-router-dom'
import lodgings from '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/data/logements.json'

const Lodging = () => {
    const {id} = useParams();
    const foundLodging = lodgings.find(lodging => {
        return lodging.id === id;
    })

    const tags = foundLodging.tags;
    
    return (
        <div key={id}>
            <img className='lodging-item-cover' src={foundLodging.cover} alt={`${foundLodging.title} cover`} />
            <h1>{foundLodging.title}</h1>
            <p>{foundLodging.location}</p>
            {/* <p>{tags[1]}</p> */}
            <ul>            
                {tags.forEach((tag) => {
                    return(
                        <li>{tag}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Lodging