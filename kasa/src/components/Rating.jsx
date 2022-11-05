import fullStar from '../images/fullStar.svg'
import emptyStar from '../images/emptyStar.svg'

const rangeValue = {
    1: <div className='rating'><img src={fullStar} alt='full-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /></div>,
    2: <div className='rating'><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /></div>,
    3: <div className='rating'><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={emptyStar} alt='empty-star' /><img src={emptyStar} alt='empty-star' /></div>,
    4: <div className='rating'><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={emptyStar} alt='empty-star' /></div>,
    5: <div className='rating'><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /><img src={fullStar} alt='full-star' /></div>
}

const Rating = ({ notation }) => {
    // const range = [1, 2, 3, 4, 5]
    return (
            rangeValue[notation]
    )
}

export default Rating

// const Rating = ({ scaleValue, careType }) => {
//     const range = [1, 2, 3]
//     const scaleType =
//         careType === 'light' ? (
//             <img src={Sun} alt='sun-icon' />
//         ) : (
//             <img src={Water} alt='water-icon' />
//         )

//     return (
//         <div
//             onClick={() =>
//                 alert(
//                     `Cette plante requiert ${quantityLabel[scaleValue]} ${careType === 'light' ? 'de lumière' : "d'arrosage"
//                     }`
//                 )
//             }
//         >
//             {range.map((rangeElem) =>
//                 scaleValue >= rangeElem ? (
//                     <span key={rangeElem.toString()}>{scaleType}</span>
//                 ) : null
//             )}
//         </div>
//     )
// }

// export default Rating