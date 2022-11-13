import {React, useEffect } from 'react'

// COMPONENTS //
import Banner from "../components/Banner";
import LodgingList from "../components/Home/LodgingList"

// STYLES //
import '../styles/index.css'

// IMAGES //
import bannerBackground from '../images/banner_img_home.png'

const Home = () => {

  useEffect(() => {
    document.title = `KASA`
})

  return (
    <div>
      <Banner 
        title="Chez vous, partout et ailleurs"
        image={bannerBackground}
      />
      <LodgingList />
    </div >
  )
}

export default Home;
