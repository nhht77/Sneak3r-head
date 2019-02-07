import React from 'react';
import Card from "./Card";
import Spinner from "../Spinner";

const CardGroup = ({title, products}) => {
    
    const cardGenerator = () => (
        products
        ? products.map( p => (
            <Card key={p._id} product={p} />
        ))
        : <Spinner/>
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
                    flexWrap:'wrap',
                    justifyContent: `center`
                }}>
                    {cardGenerator()}
                </div>
            </div>
        </div>
    );
}

// { renderCards(list)}


export default CardGroup;
