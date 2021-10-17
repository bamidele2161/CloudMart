import React, {useState, useEffect} from 'react'
import Arrow from './Arrow'
import SliderContent from './SliderContent'
import imageslider from './imageslider'
import Dot from './Dot'
import './slider.css'

const len = imageslider.images.length - 1
const Slider = (props) => {

    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} imageslider={imageslider} />
            <Arrow 
                prevSlide={() => setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                }
                nextSlide={() => 
                setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
                <Dot 
                activeIndex={activeIndex} 
                imageslider={imageslider.images} 
                onclick={(activeIndex) =>setActiveIndex(activeIndex)}/>
        </div>
    )
}

export default Slider;
