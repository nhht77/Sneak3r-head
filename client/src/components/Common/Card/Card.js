import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
        <div className={`card-item-wrapper ${this.props.grid}`}>
        <div
            className="image"
            // style={{ background:`url(${this.renderCardImage(this.props.images)}) no-repeat`}}
        >
        </div>
            <div className="action-container">
                <div className="tags">
                    <div className="brand">{this.props.product.brand.name}</div>
                    <div className="name">{this.props.product.name}</div>
                    <div className="name">{this.props.product.price}</div>
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
