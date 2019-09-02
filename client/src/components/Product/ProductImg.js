import React, { Component } from 'react'

class ProductImg extends Component {

  constructor(){
    super();
    this.state = {
      lightbox: false,
      imagePosition: 0,
      lightboxImages: []
    }
  }

  componentDidMount() {
    let lightboxImages = this.props.detail.images.map( image => image.url);
    this.setState({
      lightboxImages:[...this.state.lightboxImages, ...lightboxImages]
    })

  }

  handleLightBox = idx => console.log(idx);

  renderImages = (img) => (img.length > 0) ? img[0].url : '/resources/images/not-available.png';

  onThumbsDisplay = () => this.state.lightboxImages.map((item, i) => (
      <div
        key={i}
        onClick={() => this.handleLightBox(i)}
        className="thumb"
        style={{ background: `url(${item}) no-repeat` }}
      ></div>
  ))
    

  render() {
    return (
      <div className="product-image-container">
        <div className="main-pic">
          <div
            style={{ background:`url(${this.renderImages(this.props.detail.images)}) no-repeat`}}
            onClick={() => this.handleLightBox(0)}>
          </div>
        </div>
        <div className="main-thumbs">
          {this.state.lightboxImages.length > 0 ? this.onThumbsDisplay(this.props.detail) : ''}
        </div>
      </div>
    )
  }
}

export default ProductImg;
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