import React from 'react'
import './card.css'

import data from './data.js'
import Products from './Products'
const Card = () => {
    return (
        <div className="card-container">
            <div className="card-headline">
                <h1 className="card-header-title">TOP SEARCH</h1>
            </div>
            <div className="card-item-container">
                {
                    data.products.map((product) => (
                   <Products key={product.id} product={product}/>
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
