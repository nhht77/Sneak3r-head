import React, { Component } from 'react';
import Lightbox from 'react-images';


export class LightboxImages extends Component {
  constructor(props){
    super(props);
    this.state = {
      lightboxIsOpen: true,
      currentImage: this.props.position,
      images: []
    }
  }

  componentDidUpdate() {
    if(this.props.images){
      let images = this.props.images.map( (image, idx) => image);
      this.setState({images})
    }
  }
  // static getDerivedStateFromProps(props, state) {
  //   if (props.images) {
  //     const images = [];
  //     props.images.forEach(element => {
  //       images.push({ src: `${element}` })
  //     });
  //     return state = {
  //       images
  //     }
  //   }
  //   return false
  // }

  gotoPrevious = () => 
    this.setState({ currentImage: this.state.currentImage - 1})
  

  gotoNext = () => 
    this.setState({currentImage: this.state.currentImage + 1})

  closeLightbox = () => 
    this.props.onclose();
  

  render() {
    return (
      <Lightbox
        currentImage={this.state.currentImage}
        images={this.state.images}
        isOpen={this.state.lightboxIsOpen}
        onClickPrev={() => this.gotoPrevious()}
        onClickNext={() => this.gotoNext()}
        onClose={() => this.closeLightbox()}
      />
    )
  }
}

export default LightboxImages;
