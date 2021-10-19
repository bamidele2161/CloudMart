import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Related from '../components/Related'
import Rating from '../components/Card/Rating'
import data from '../components/Card/data'
import '../components/ProductPage/productpage.css'

const Product = (props) => {
    const product = data.products.find((x) => x.id === props.match.params.id);
    if(!product) {
        return <div>Product Not Found</div>
    }
    return (
        <div className="product" path="product">
            <Header />
            
            <div className="Product-page">
            <div className="div-search-product-page">
                <div className="product-page-search">
                    <input className="product-page-input" placeholder="Search store, products, brands and categories" />
                    <a className="product-page-search-button" href="#"><i className="fa fa-search" id="fa-search"></i></a>
                </div>
            </div>
            <div className="display-product">
                <div className="product-image">
                    <div className="product-image-details">
                        <h3 className="product-page-name">Nike Free Footwear</h3>
                        <Rating rating={product.rating}/>
                        <p>({product.countInStock})</p>
                    </div>
                    <img src={product.image} className="product-image-url" alt={product.name}/>
                </div>
                <div className="product-details">
                    <p className="spn">Sponsored Price</p>
                    <h2 className="product-price">${product.price}</h2>
                    <p className="save-price">${product.save}</p>
                    <button className="details-btn"><i class="fa fa-wpforms" aria-hidden="true"></i>Place Order</button>
                    <button className="details-btn"><i class="fa fa-cart-plus" aria-hidden="true"></i>Add to cart</button>
                    <button className="details-btn"><i class="fa fa-heart"></i>Add to wishlist</button>
                    <button className="details-btn"><i class="fa fa-share-alt" aria-hidden="true"></i>Share</button>
                    <div className="features">
                        <ul className="feature-list">
                            <h2 className="feature-title">
                                Key Features
                            </h2>
                            <li className="feature-item">Soft and Long Lasting Sole</li>
                            <li className="feature-item">Quality Cotton Body</li>
                            <li className="feature-item">Red Color</li>
                            
                                
                        </ul>
                        <div className="price">
                            <h3 className="status">Status</h3>
                                    {product.countInStock>0? (<span className="success">In Stock</span>)
                                    :(<span className="error">Unavailable</span>)
                                }
                        </div>
                    </div>
                </div>
            </div>        
        </div>

            <Related />
            <Footer />
        </div>
    )
}

export default Product
