import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'


const AddToCartButton = ({onClick}) => {
    return (
        <div className="add-to-cart-link"
            onClick={()=> console.log("Add to Cart")}>
            <FontAwesomeIcon icon={faShoppingBag} />
             Add to cart
        </div>
    );
}

export default AddToCartButton;
