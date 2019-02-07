import React, { Component } from 'react';
import DefaultButton from "../Button/DefaultButton";

export class Card extends Component {

    renderImages(img){
        if(img.length > 0){
            return img[0].url
        } else {
            return '/resources/images/not-available.png'
        }
    }
    
  render() {
    return (
        <div className={`card-item-wrapper ${this.props.grid}`}>
        <div className="image"
        style={{ 
            background:`url(${this.renderImages(this.props.product.images)}) 
            no-repeat`
        }}>
        </div>
        <div className="action-container">
            <div className="tags">
                <div className="brand">{this.props.product.brand.name}</div>
                <div className="name">{this.props.product.name}</div>
                <div className="name">€ {this.props.product.price}</div>
            </div>

            { 
                this.props.grid 
                ?
                <div className="description">
                    <p>{this.props.product.description}</p>    
                </div>
                : null
            }
            <div className="actions">
            <div className="button-wrap">
                <DefaultButton
                    className="card-link"
                    title="View product"
                    to={`/product_detail/${this.props.product._id}`}
                    addStyles={{margin: '10px 0 0 0'}}
                />
            </div>

            
            </div>
        </div>
      </div>
    )
  }
}

// { props.grid ?
    // <div className="description">
        // <p>
            // {props.description}
        // </p>    
    // </div>
    // :null
// }

export default Card
