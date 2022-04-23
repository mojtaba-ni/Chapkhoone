import React, { Component } from "react";
import Slider from "react-slick";
import product1 from '../../assets/Product/product1.png'
import product2 from '../../assets/Product/product2.png'
import product3 from '../../assets/Product/product3.png'
import SliderCard from "../sliderCard";
import styles from '../../styles/components/slider.module.scss'

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots:true,    
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500,
      responsive: [
  
        {
          breakpoint: 1115,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint:560,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        }
      ]
    };
    const width = window.outerWidth
    return (
      <div className={styles.slider}>
        <Slider {...settings}>
          <div className={styles.sliderLi}>
          <SliderCard img={product3} title={"لمینت مات"}  />
          </div>
          <div className={styles.sliderLi}>
            <SliderCard img={product1} title={"لمینت براق"} />
          </div>
          <div className={styles.sliderLi}>
            <SliderCard img={product2} title={"مخملی طلاکوب"} />
          </div> 
          <div className={styles.sliderLi}>
          <SliderCard img={product2} title={"چاپ سربرگ"} />
          </div>
          <div className={styles.sliderLi}>
          <SliderCard img={product3} title={"لمینت مات"}  />
          </div>
          <div className={styles.sliderLi}> 
          <SliderCard img={product2} title={"مخملی طلاکوب"} />
          </div>
          <div className={styles.sliderLi}>
          <SliderCard img={product1} title={"لمینت براق"} />
          </div>
        
        </Slider>
      </div>
    );
  }
}