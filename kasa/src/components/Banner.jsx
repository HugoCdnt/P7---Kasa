// import bannerBackground from '../images/banner_img_home.jpg'
// import bannerBackground from '../images/Background.jpg'

const Banner = ({title, image}) => {
    return (
    <div className='banner'>
        {/* <h1>Chez vous, partout et ailleurs</h1>
        <img className='banner-background' src={bannerBackground} alt={`Fond bannière`} /> */}
        <h1>{title}</h1>
        <img className='banner-background' src={image} alt={`Fond bannière`} />
    </div>
    )
}

export default Banner