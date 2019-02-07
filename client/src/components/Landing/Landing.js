import React, { Component } from 'react';
import Slider from "./Slider";
import Promotion from "./Promotion";

export class Landing extends Component {
  render() {
    return (
      <div>
        <Slider/>
          This is the homepage
        <Promotion/>
      </div>
    )
  }
}

export default Landing
