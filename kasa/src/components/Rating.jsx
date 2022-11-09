import fullStar from '../images/fullStar.svg'
import emptyStar from '../images/emptyStar.svg'

import '../styles/Rating.css'

const rangeValue = {
    1: <div className='rating'><img src={fullStar} alt='full-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /></div>,
    2: <div className='rating'><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /></div>,
    3: <div className='rating'><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /></div>,
    4: <div className='rating'><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={emptyStar} alt='empty-star' /></div>,
    5: <div className='rating'><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /></div>
}

const Rating = ({ notation }) => {
    return (
        rangeValue[notation]
    )
}

export default Rating