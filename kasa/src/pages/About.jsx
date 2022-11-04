import Banner from '../components/Banner';
import WrapperList from '../components/Wrapper/WrapperList';

import Collapse from '../components/About/Collapse';

import data from '../data/dataAbout.json'

const About = () => {

  return (
      <div>
        <Banner />
        {/* <WrapperList data={data}/> */}
        {data.map(data => <Collapse title={data.title} description={data.text}/>)}
        {/* <Collapse title={data.title}/> */}
      </div >
    )
  }
  
  export default About;
  

