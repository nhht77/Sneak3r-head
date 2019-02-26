import React from 'react';
import CardGroupShop from "./CardGroupShop";

const GetMoreCard = ({grid, products}) =>{
  return (
    <div>
        <CardGroupShop
            grid={grid}
            products={products}/>
    </div>
  )
}

export default GetMoreCard;
