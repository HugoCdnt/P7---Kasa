import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/LodgingItem.css';

const LodgingItem = ({ cover, title, id }) => {
    return (
        <li className='lodging-item' key={id}>
            <img className='lodging-item-cover' src={cover} alt={`${title} cover`} />
            <p>{title}</p>
        </li>
    )
}

export default LodgingItem