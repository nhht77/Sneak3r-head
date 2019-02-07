import React from 'react';
import DefaultButton from "../Common/Button/DefaultButton";

const Promotion = () => {
    const promotion = 
        {
            img:'/resources/images/home-02.jpg',
            title:'Up to 40% off ',
            titleTwo:'Legit Sneaker Quality Check',
            linkTitle:'Shop now',
            linkTo:'/shop'
        }
    
    return (
        <div className="home-promotion">
        { 
            promotion
            ? 
            (
                <div 
                    className="home-promotion-img" 
                    style={{background:`url(${promotion.img})`}}>
                <div className="tag title">{promotion.title}</div>
                <div className="tag low-title">{promotion.titleTwo}</div>
                    <DefaultButton
                        title={promotion.linkTitle}
                        to={promotion.linkTo}
                        addStyles={{ margin: '.625rem auto'}} />
                </div>
            )

            : null
        }
        </div>
    );
}

export default Promotion;
