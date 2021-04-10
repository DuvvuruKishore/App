import React from 'react';
import {Link} from 'react-router-dom';
import './Products.css';


function Products({imageUrl,name,price,description,productId}) {
    return (
        <div className="product">
        <img src={imageUrl}
        alt={name}/>

        <div className="product_info">
        <p className="info_name">{name}</p>
        <p className="info_description">
        {description.substring(0,100)}...</p>
        <p className="info_price">Rs:{price}</p>
        <Link to={`/product/${productId}`} className="info_button">View</Link>
        </div>
            
        </div>
    )
}

export default Products
