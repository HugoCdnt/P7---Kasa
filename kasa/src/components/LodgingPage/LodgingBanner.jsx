import '/Users/hugocadenat/Documents/Formation_dév_web/P7/kasa/src/styles/Banners.css'

const LodgingBanner = ({ cover, title }) => {
    return (
            <img src={cover} className='banner-lodging' alt={`${title} cover`} />
    )
}

export default LodgingBanner