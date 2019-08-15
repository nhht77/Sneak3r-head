import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import AddToCartButton from "../Common/Button/AddToCartButton";

export class ProductSpecs extends Component {
  render() {

    const showProductTags = detail => ( 
      <div className="product-tags">
        { this.props.detail.shipping ?
          <div className="tag">
              <div><FontAwesomeIcon icon={faTruck}/></div>                
              <div className="tag-text">
                  <div>Free shipping</div>
                  <div>And return</div>
              </div>
          </div>
        :null
        }

        { this.props.detail.available ?
          <div className="tag">
              <div><FontAwesomeIcon icon={faCheck}/></div>
              <div className="tag_text">
                  <div>Available</div>
                  <div>in store</div>
              </div>
          </div>
          :
          <div className="tag">
              <div><FontAwesomeIcon icon={faTimes}/></div>
              <div className="tag-text">
                  <div>Not Available</div>
                  <div>Preorder only</div>
              </div>
          </div>
        }
      </div>
    );

    const showProductActions = detail => (
      <div className="product-actions">
          <div className="price">$ { detail.price }</div>
          <div className="cart">
          <AddToCartButton/>
          </div>
      </div>
  )

    const showProductSpecs = (detail) => (
        <div className="product-specifications">
            <h2>Specs:</h2>
            <div>
              <div className="item">
                <strong>Brand:</strong> {detail.brand.name}
              </div>
              <div className="item">
                <strong>Colors:</strong>
              </div>
              <div className="item">
                <strong>Sizes:</strong> 
              </div>
            </div>
        </div>
    )


    return (
      <div>
        <h1>{this.props.detail.brand.name} {this.props.detail.name}</h1>
        <p>
            {this.props.detail.description}
        </p>
        {showProductTags(this.props.detail)}
        {showProductActions(this.props.detail)}
        {showProductSpecs(this.props.detail)}
      </div>
      
    )
  }
}

export default ProductSpecs
