// import lodgings from '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/data/logements.json'
import lodgings from '../../data/logements.json'
import LodgingItem from './LodgingItem';

// import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/LodgingList.css';
import '../../styles/LodgingList.css'


const LodgingList = () => {    
    return (
            <ul className='lodgings-list'>
                {lodgings.map(({ id, cover, title }) =>
                    <LodgingItem
                        id={id}
                        cover={cover}
                        title={title}
                    />
                )}
            </ul>
    )
}

export default LodgingList
