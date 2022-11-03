// import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/LodgingItem.css';

import LodgingBanner from "./LodgingBanner"

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

const Lodging = ({ cover, title, id, location, tags }) => {
    return (
        <div key={id}>
            {/* <LodgingBanner cover={cover} title={title} /> */}
            <h1>{title}</h1>
            <p>{location}</p>
            <ul>{tags}</ul>
        </div>
    )
}

export default Lodging