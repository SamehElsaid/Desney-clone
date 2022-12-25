import React, { memo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
const Slider = memo(() => {
    return (
        <section className='relative || mx-auto  || shadow-2xl || max-w-screen-2xl'>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading='lazy' src="/images/slider-1.jpg" alt="slider-1" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-2.jpg" alt="slider-2" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-3.jpg" alt="slider-3" />
                </div>
                <div>
                    <img loading='lazy' src="/images/slider-4.jpeg" alt="slider-4" />
                </div>
            </Carousel>
        </section>
    );
});

export default Slider;