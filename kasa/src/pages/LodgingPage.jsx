import React from 'react'
import { useParams } from 'react-router-dom'
import lodgings from '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/data/logements.json'
import Lodging from '../components/LodgingPage/Lodging'
import LodgingBanner from '../components/LodgingPage/LodgingBanner'

const LodgingPage = () => {
    const {id} = useParams();
    const foundLodging = lodgings.find(lodging => {
        return lodging.id === id;
    })

    // const returnInt = (element) => {
    //     return parseInt(element, 10)
    // };

    // const tags = foundLodging.tags;

    // const tags = [];
    // for (let i = 0; i < foundLodging.tags.length; i++) {
    //     tags.push()
    // }
    
    // console.log(foundLodging);

    // <div className='lodging'>
    //             <Lodging
    //                 // cover={foundLodging.cover}
    //                 title={foundLodging.title}
    //                 id={id}
    //                 location={foundLodging.location}
    //                 tags={foundLodging.tags}
    //             />
    // </div>
    return (
        <div className='lodging'>
            <LodgingBanner cover={foundLodging.cover}/>
            <Lodging
                title={foundLodging.title}
                id={id}
                location={foundLodging.location}
                tags={foundLodging.tags}
            />
        </div>
    )

    // return (
    //     <div className='lodging'>
    //             {foundLodging.map(({ cover, title, id, location, tags }) =>
    //                 <Lodging
    //                     cover={cover}
    //                     title={title}
    //                     id={id}
    //                     location={location}
    //                     tags={tags}
    //                 />
    //             )}
    //     </div>

    // )
}


export default LodgingPage