import Banner from "../components/Banner";
import LodgingList from "../components/Home/LodgingList"
import '../styles/index.css'

// import bannerBackground from '../images/Background.jpg'
import bannerBackground from '../images/banner_img_home.png'

const Home = () => {
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
