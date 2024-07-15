
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImage1 from '../assets/img/adminblock-img.jpg'
import bannerImage2 from '../assets/img/banner2.jpg'
import bannerImage3 from '../assets/img/banner3.jpg'
import bannerImage4 from '../assets/img/banner4.png'
import bannerImage5 from '../assets/img/banner5.png'

const CustomCarousel = () => {
    return (
        <Carousel showThumbs={false} autoPlay infiniteLoop>
            <div>
                <img src={bannerImage1} alt="Slide 1" />
            </div>
            <div>
                <img src={bannerImage2} alt="Slide 2" />
            </div>
            <div>
                <img src={bannerImage3} alt="Slide 3" />
            </div>
            <div>
                <img src={bannerImage4} alt="Slide 1" />
            </div>
            <div>
                <img src={bannerImage5} alt="Slide 1" />
            </div>
        </Carousel>
    );
};

export default CustomCarousel;
