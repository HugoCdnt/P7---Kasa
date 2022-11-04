import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/Lodging.css'

const Lodging = ({ cover, title, id, location, tags, host, hostPhoto, rating }) => {
    return (
        <div key={id}>
            <div className="lodging-page--heading">
                <div className="title-location-tags">
                    <h1>{title}</h1>
                    <p>{location}</p>
                    <ul className="tags">
                        {tags.map((tag) => 
                            <li>{tag}</li>
                            )}
                    </ul>
                </div>
                <div className="host-rating">
                    <div className='host'>
                        <p>{host}</p>
                        <img className='host-photo' src={hostPhoto} alt={host}/>
                    </div>
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    )
}

export default Lodging


// const Lodging = ({ cover, title, id, location, tags }) => {
//     return (
//         <div key={id}>
//             <img src={cover} alt={`${title} cover`} />
//             <h1>{title}</h1>
//             <p>{location}</p>
//             <ul>{tags}</ul>
//         </div>
//     )
// }