import React, { Component } from 'react'

class ProductImg extends Component {

  renderImages = (img) => (img.length > 0) ? img[0].url : '/resources/images/not-available.png';


  render() {
    return (
      <div className="product-image-container">
        <div className="main-pic">
          <div
            style={{ background:`url(${this.renderImages(this.props.detail.images)}) no-repeat`}}
            onClick={() => this.handleLightBox(0)}
          >
          </div>
        </div>
        <div className="main-thumbs">

        </div>
        
      </div>
    )
  }
}

export default ProductImg
// {
  // this.state.lightbox ?
    // <ImageLightBox
      // id={detail.id}
      // images={this.state.lightboxImages}
      // open={this.state.open}
      // pos={this.state.imagePos}
      // onclose={() => this.handleLightBoxClose()}
    // />
    // : null
// }