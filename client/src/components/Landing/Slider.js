import React, { Component } from 'react';
import HomeSlider from "react-slick";
import DefaultButton from "../Common/Button/DefaultButton";

export class Slider extends Component {
    
  render() {

    const slides = [
        {
            img:'/resources/images/home-04.jpg',
            title:'Original ',
            titleTwo:'Awesome discounts',
            linkTitle:'Shop now',
            linkTo:'/shop'
        },
        {
            img:'/resources/images/home-03.jpg',
            title:'Yeezy Boost',
            titleTwo:'Custom Shop',
            linkTitle:'View offers',
            linkTo:'/shop'
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };


    const slideGenerator = () => (
        slides
        ? slides.map( (s, idx) => (
            <div key={idx}>
                    <div className="featured-image"
                        style={{
                            background:`url(${s.img})`
                        }}>
                        <div className="featured-action">
                            <div className="tag title">{s.title}</div>
                            <div className="tag low-title">{s.titleTwo}</div>
                            <div>
                                <DefaultButton
                                    title={s.linkTitle}
                                    to={s.linkTo}
                                    addStyles={{ margin: '10px 0 0 0'}} 
                                    />
                            </div>
                        </div>
                    </div>
                </div>
        ))

        : null

    )

    return (
        <div className="featured-container">
            <HomeSlider {...settings}>
                {slideGenerator()}
            </HomeSlider>
        </div>
    )
  }
}

export default Slider
