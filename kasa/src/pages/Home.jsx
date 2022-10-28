import LodgingList from "../components/Home/LodgingList"
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/index.css'

const Home = () => {
  return (
    <div>
      <Header />
      <LodgingList />
      <Footer />
    </div >
  )
}

export default Home;
