import React from 'react';
import CardGroupShop from "./CardGroupShop";

const GetMoreCard = ({grid, products, size, limit, getMoreItems}) =>{
  return (
    <div>
        <CardGroupShop
            grid={grid}
            products={products}/>
            
        { size > 0 && size >= limit ?
          "something"
          : null }

        <div className="load-more-container">
            <span onClick={getMoreItems}>Load More</span>
        </div>
    </div>
  )
}

export default GetMoreCard;
