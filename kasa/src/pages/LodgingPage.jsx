// Plugins React
import React from 'react'
import { useParams } from 'react-router-dom'

// Data
import lodgings from '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/data/logements.json'

// Composants
import Lodging from '../components/LodgingPage/Lodging'
import LodgingBanner from '../components/LodgingPage/LodgingBanner'
import Collapse from '../components/Collapse'

// Styles
import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/Collapse.css'
import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/LodgingPage.css'



const LodgingPage = () => {
    const {id} = useParams();
    const foundLodging = lodgings.find(lodging => {
        return lodging.id === id;
    })

    console.log(foundLodging);

    return (
        <div className='lodging'>
            <LodgingBanner cover={foundLodging.cover}/>
            <Lodging
                title={foundLodging.title}
                id={id}
                location={foundLodging.location}
                tags={foundLodging.tags}
                host={foundLodging.host.name}
                hostPhoto = {foundLodging.host.picture}
                rating={foundLodging.rating}
            />
            <div className='lodging-collapses'>
                <Collapse title={foundLodging.title} description={foundLodging.description}/>
                <Collapse title="Équipements" description={foundLodging.equipments.map((equipment) => <li>{equipment}</li>)}/>
            </div>
        </div>
    )
}

export default LodgingPage

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