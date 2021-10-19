import React from 'react'
import './related.css'
import data from '../../components/Card/data'
import Rating from '../../components/Card/Rating'
const Related = () => {
    return (
        <div className="related-container">
            <div className="related-headline">
                <h1 className="related-header-title">RELATED SEARCH</h1>
            </div>

            <div className="related-item-container">
                {
                    data.products.map((product) => (
                        <div className="related-badge" key={product.id}>
                            <div className="related-item" >
                            <div className="related-image">
                                <img src={product.image} alt="related-img" className="related-img"></img>
                            </div>
                            <div className="related-details">
                                <p className="related-save">Save ${product.save}</p>
                                <h3 className="related-name">{product.name}</h3>
                                <h2 className="related-price">${product.price}</h2>
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

export default Related
