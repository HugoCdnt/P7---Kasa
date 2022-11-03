import Banner from '../components/Banner';
import WrapperList from '../components/Wrapper/WrapperList';

import data from '../data/dataAbout.json'

const About = () => {
    return (
      <div>
        <Banner />
        <WrapperList data={data}/>
      </div >
    )
  }
  
  export default About;
  

