// Composants
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

// import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css'
import '../styles/About.css'
import bannerAbout from '../images/banner-about.png'

// import WrapperList from '../components/Wrapper/WrapperList';


import data from '../data/dataAbout.json'

const About = () => {

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
  

