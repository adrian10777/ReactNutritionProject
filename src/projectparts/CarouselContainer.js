import React from "react";
import { Carousel } from 'react-bootstrap';
import image1 from '../Static/imagesbenefits/rainbowfoodstock.jpg'
import image2 from '../Static/imagesbenefits/lightbulb.jpg'
import image3 from '../Static/imagesbenefits/gutandbrain.jpg'
import image4 from '../Static/imagesbenefits/saynotohospital.jpg'
import image5 from '../Static/imagesbenefits/weightloss.jpg'

const CarouselContainer = () => {
    return (
        <Carousel fade={true} className="carousel">
  <Carousel.Item interval={3000}>
    <img
      id="carouselbenefits1"
      src= {image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 id="carouseltitle1" >New Amazing Foods!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      id="carouselbenefits2"
      src= {image2}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 id="carouseltitle2">Increase In Energy!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      id="carouselbenefits3"
      src= {image3}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 id="carouseltitle3">Healthier Gut And Brain!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      id="carouselbenefits4"
      src= {image4}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 id="carouseltitle4">Decreased Risk Of Chronic Diseases!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      id="carouselbenefits5"
      src= {image5}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 id="carouseltitle5">Lose Weight!</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default CarouselContainer;