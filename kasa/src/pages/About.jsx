import Banner from '../components/Banner';
import Wrapper from '../components/About/Wrapper';
import WrapperList from '../components/Wrapper/WrapperList';

const About = () => {

  const titles = ["Test", "Test 2", "Test 5", "Pipi"];

    return (
      <div>
        <Banner />
        {/* <Wrapper title="Fiabilité" />
        <Wrapper title="Respect" />
        <Wrapper title="Responsabilité" />
        <Wrapper title="Service" /> */}
        {/* <Wrapper titles={titles} /> */}
        <WrapperList titles={titles} />
      </div >
    )
  }
  
  export default About;
  

