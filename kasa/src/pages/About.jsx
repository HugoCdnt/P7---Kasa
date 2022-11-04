// Composants
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';

import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/About.css'

// import WrapperList from '../components/Wrapper/WrapperList';


import data from '../data/dataAbout.json'

const About = () => {

  return (
      <div>
        <Banner />
        {data.map(data => <Collapse title={data.title} description={data.text}/>)}
      </div >
    )
  }
  
  export default About;
  

