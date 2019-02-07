import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const CartButton = ({onClick}) => {
    return (
        <div className="bag-link"
            onClick={()=>{ onClick()}}>
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
    );
}

export default CartButton;
