import {React, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// DATA //
import lodgings from '../data/logements.json'

// COMOPONENTS //
import Lodging from '../components/LodgingPage/Lodging'
import Collapse from '../components/Collapse'
import ImageSlider from '../components/LodgingPage/ImageSlider'

// STYLES //
import '../styles/Collapse.css'
import '../styles/LodgingPage/LodgingPage.css'



const LodgingPage = () => {
    const {id} = useParams();
    const foundLodging = lodgings.find(lodging => {
        return lodging.id === id;
    })

    useEffect(() => {
        document.title = `${foundLodging.title}`
    }, [foundLodging.title])

    return (
        <div className='lodging-page--container'>
            <div className='slider-container'>
                <ImageSlider slides={foundLodging.pictures} />
            </div>
            <Lodging
                title={foundLodging.title}
                id={id}
                location={foundLodging.location}
                tags={foundLodging.tags}
                host={foundLodging.host.name}
                hostPhoto = {foundLodging.host.picture}
                rating = {foundLodging.rating}
            />
            <div className='lodging-collapses'>
                <Collapse title="Description" description={foundLodging.description}/>
                <Collapse title="Équipements" description={foundLodging.equipments.map((equipment) => <li>{equipment}</li>)}/>
            </div>
        </div>
    )
}

export default LodgingPage