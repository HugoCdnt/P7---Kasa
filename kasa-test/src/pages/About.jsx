// COMPONENTS //
import {React, useEffect } from 'react'
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

// STYLES //
import '../styles/About.css'

// IMAGES //
import bannerAbout from '../images/banner-about.png'

import data from '../data/dataAbout.json'

const About = () => {

  useEffect(() => {
    document.title = `A Propos`
  })

  return (
    <div>
      <Banner 
        image={bannerAbout}
      />
      <div className="test">
        {data.map(data => <Collapse title={data.title} description={data.text}/>)}
      </div >
    </div>
    )
  }
  
  export default About;
  

