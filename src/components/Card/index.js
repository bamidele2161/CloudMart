import React from 'react'
import './card.css'

import data from './data.js'
import Rating from './Rating'
const Card = () => {
    return (
        <div className="card-container">
            <div className="card-headline">
                <h1 className="card-header-title">TOP SEARCH</h1>
            </div>
            <div className="card-item-container">
                {
                    data.products.map((product) => (
                        <div className="card-badge" key={product.id}>
                            <div className="card-item" >
                            <div className="card-image">
                                <img src={product.image} alt="card-img" className="card-img"></img>
                            </div>
                            <div className="card-details">
                                <p className="card-save">Save ${product.save}</p>
                                <h3 className="card-name">{product.name}</h3>
                                <h2 className="card-price">${product.price}</h2>
                                <div className="rating">
                                    <Rating rating={product.rating}/>
                                    <div className="sponsored">
                                        <i className="fa fa-info-circle"></i>
                                        <p className="sponsored-paragraph">
                                            Sponsored
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        
                        <div className="cart-btn">
                            <button className="cart-button">ADD TO CART</button>
                        </div>
                    </div>
            ))
        }
         </div>
            <div className="see-more">
                <a href="#" className="see-more-btn">See More <i className="fa fa-arrow-right"></i></a>
            </div>
        </div>
    )
}

export default Card
