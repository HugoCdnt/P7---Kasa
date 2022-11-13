import { useState } from "react";

// STYLES ..
import "../../styles/LodgingPage/ImageSlider.css";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex]})`
    }
 
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
}

export default ImageSlider;