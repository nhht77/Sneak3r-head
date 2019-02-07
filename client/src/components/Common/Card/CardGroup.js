import React from 'react';
import Card from "./Card";

const CardGroup = ({title, products}) => {
    
    const cardGenerator = () => (
        products
        ? products.map( p => (
            <Card key={p._id} product={p} />
        ))
        : null
    )

    return (
        <div className="card-group">
            <div className="container">
                { title 
                    ?
                    <div className="title">
                        {title}
                    </div>
                    
                    : null 
                }
                <div style={{
                    display:'flex',
                    flexWrap:'wrap'
                }}>
                    {cardGenerator()}
                </div>
            </div>
        </div>
    );
}

// { renderCards(list)}


export default CardGroup;
