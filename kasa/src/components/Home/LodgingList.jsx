import lodgings from '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/data/logements.json'
import LodgingItem from './LodgingItem';

import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/LodgingList.css';

const LodgingList = () => {    
    return (
        <div className='lodgings'>
            <ul className='lodgings-list'>
                {lodgings.map(({ id, cover, title }) =>
                    // <div key={id}>
                    <LodgingItem
                        id={id}
                        cover={cover}
                        title={title}
                    />
                    // </div>
                )}
            </ul>
        </div>
    )
}

export default LodgingList
