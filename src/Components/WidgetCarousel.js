import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react'

export default function WidgetCarousel() {
    return (
        <div className="graphWidget">
            <Carousel className="carousel">
                    <img src="Image1.png" alt="React 1"/>
                    <img src="Image2.png" alt="React 2"/>
                    <img src="Image3.jpeg" alt="React 3"/>
            </Carousel>
        </div>
    )
}
