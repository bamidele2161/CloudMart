import React, {useState} from 'react'
import './card.css'
import Axios from 'axios'
import data from './data.js'
import Products from './Products'
const Card = () => {
    const [product, setProduct] = useState('');
    const getProduct = async (e) => {
        e.preventDefault();
        const response = await Axios.get("http://localhost:8010/proxy/api/all-products");
        console.log(response);
        
    }
    return (
        <div className="card-container">
            <div className="card-headline">
                <h1 className="card-header-title" onClick={getProduct}>TOP SEARCH</h1>
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
