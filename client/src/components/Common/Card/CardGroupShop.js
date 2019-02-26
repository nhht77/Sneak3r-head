import React from 'react';
import Card from "./Card";
import Spinner from "../Spinner";

const CardGroupShop = ({products, grid}) => {

    const cardGenerator = () => (
        products
        ? products.map( p => (
            <Card key={p._id} product={p} grid={grid} />
        ))
        : <Spinner/>
    )
    
  return (
    <div className="card-group-shop">
        { products ?
            products.length === 0 ? <div className="no-result"> Sorry, no results </div>
            :null
        : null }
        {cardGenerator()}
    </div>
  )
}

export default CardGroupShop;

