import React, { Component } from 'react';
import DefaultButton from "../Button/DefaultButton";
import CartButton from '../Button/CartButton';

export class Card extends Component {

  renderImages = (img) => (img.length > 0) ? img[0].url :'/resources/images/not-available.png';
    
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
                />
            </div>
            <div className="button-wrap">
                <CartButton 
                    onClick={()=> console.log("You add an Item") }
                />
            </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Card
