import React from "react"
import Carousel from "react-bootstrap/Carousel"

const HeaderCarousel = ({ firstImage, secondImage, thirdImage }) => {
    return (
        <Carousel
            interval={6000}
            indicators={true}
            controls={false}
            touch={true}
        >
            <Carousel.Item>
                {firstImage}
            </Carousel.Item>
            <Carousel.Item>
                {secondImage}
            </Carousel.Item>
            <Carousel.Item>
                {thirdImage}
            </Carousel.Item>
        </Carousel>
    )
}

export default HeaderCarousel