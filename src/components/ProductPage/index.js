import React from 'react'
import './productpage.css'
import Rating from '../Card/Rating'
import data from '../Card/data'

const ProductPage = (props) => {
    const product = data.products.find((x) => x.id === props.match.params.id);
    if(!product) {
        return <div>Product Not Found</div>
    }
    return (
        <div className="Product-page">
            <div className="div-search-product-page">
                <div className="product-page-search">
                    <input className="product-page-input" placeholder="Search store, products, brands and categories" />
                    <a className="product-page-search-button" href="#"><i className="fa fa-search" id="fa-search"></i></a>
                </div>
            </div>
            <div className="display-product">
                <div className="product-image">
                    <h3 className="product-page-name">Nike Free Footwear</h3>
                    <Rating rating={product.rating}/>
                    {/*image carousel */}
                    <img src={product?.image} className="product-image-url" alt={product.name}/>
                </div>
                <div className="product-details">
                    <p className="spn">Sponsored Price</p>
                    <h2 className="product-price">${product.price}</h2>
                    <p className="save-price">${product.save}</p>
                    
                    <div className="features">
                        <ul className="feature-list">
                            <h2 className="feature-title">
                                Key Features
                            </h2>
                            <li className="feature-item">Soft and Sole</li>
                            <li className="feature-item">Quy</li>
                            <li className="feature-item">Red Color</li>
                        </ul>
                    </div>
                    <div className="number-of-items">
                        <input placeholder='1' className="number"/>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default ProductPage
