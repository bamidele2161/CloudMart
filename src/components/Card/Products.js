import React from 'react'
import Rating from './Rating'
const products = ({product}) => {
    
    return (
        <a className="card-badge" key={product.id} href={`/product/${product.id}`}>
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
</a>
    )
}

export default products
