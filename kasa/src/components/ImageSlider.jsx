import { useState } from "react";

import "../styles/ImageSlider.css";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    // const sliderStyles = {
    //     height:'100%',
    //     position: 'relative',
    // }

    const slideStyles = {
        // width: '100%',
        // height: '100%',
        // borderRadius: '25px',
        // backgroundPosition: 'center',
        // backgroundSize: 'cover',
        backgroundImage: `url(${slides[currentIndex]})`
    }

    // const leftArrowStyles = {
    //     position: 'absolute',
    //     top: '50%',
    //     transform: 'translate(0, -50%)',
    //     left: '32px',
    //     fontSize: '45px',
    //     color: '#fff',
    //     zIndex: 1,
    //     cursor: 'pointer'
    // }

    // const rightArrowStyles = {
    //     position: 'absolute',
    //     top: '50%',
    //     transform: 'translate(0, -50%)',
    //     right: '32px',
    //     fontSize: '45px',
    //     color: '#fff',
    //     zIndex: 1,
    //     cursor: 'pointer'
    // }

    // const dotsContainerStyles = {
    //     display: 'flex',
    //     justifyContent: 'center',
    // }

    // const dotStyles = {
    //     margin: '0 3px',
    //     cursor: 'pointer',
    //     fontSize: '40px',
    //     color: 'white',
    //     textShadow: '1px 1px 2px black'
    // }

    // const slideIndex = {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     margin: '-45px 0 -15px 0',
    //     color: 'white',
    //     textShadow: '1px 1px 2px black'
    // }
 
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        slides.length > 1 ?
        <div className='sliderStyles'>
            <div className='leftArrowStyles' onClick={goToPrevious}>❰</div>
            <div className='rightArrowStyles' onClick={goToNext}>❱</div>
            <div style={slideStyles} className='slideStyles'></div>
            <div className='slideIndex'>{currentIndex + 1}/{slides.length}</div>
            <div className='dotsContainerStyles'>
                {slides.map((slide, slideIndex) =>
                        <div key={slideIndex} className='dotStyles' onClick={() => goToSlide(slideIndex)}>•</div>
                )}
            </div>
        </div>
        :  
        <div className='sliderStyles'>
            <div style={slideStyles} className='slideStyles'></div>
        </div>
    )

    // return (
    //     slides.length > 1 ?
    //     <div style={sliderStyles}>
    //         <div style={leftArrowStyles} onClick={goToPrevious}>❰</div>
    //         <div style={rightArrowStyles} onClick={goToNext}>❱</div>
    //         <div style={slideStyles}></div>
    //         <div style={slideIndex}>{currentIndex + 1}/{slides.length}</div>
    //         <div style={dotsContainerStyles}>
    //             {slides.map((slide, slideIndex) =>
    //                     <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>•</div>
    //             )}
    //         </div>
    //     </div>
    //     :  
    //     <div style={sliderStyles}>
    //         <div style={slideStyles}></div>
    //     </div>
    // )


}

export default ImageSlider;