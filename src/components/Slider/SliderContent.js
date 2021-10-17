import React from 'react'
import { Link } from 'react-router-dom'
const SliderContent = ({activeIndex, imageslider}) => {
    return (
        <section>
            {
                imageslider.images.map((slide, index) => (
                    <div key={index} className={index === activeIndex ? "slides active" : "inactive"}>
                        <img className="slide-image" src={slide.urls} alt="" />
                        <div className="img-content">
                            <div className="search-div">
                                <input className="search-product" placeholder="Search store, products, brands and categories"/>
                                <a  className="search-btn" href="#">Search <i className="fa fa-search"></i></a>
                            </div>
                            <div className="img-content-text">
                                <h1 className="slide-title">{slide.title}</h1>
                                <h2 className='slide-text'>{slide.description}</h2>
                            
                            </div>
                            <Link to="/login" className="signin-btn" href="#">Sign In &#10143;</Link>
                            
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default SliderContent
