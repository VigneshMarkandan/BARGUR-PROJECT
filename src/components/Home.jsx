import React from 'react'
import Marquee from './Marquee'
// import CustomCarousel from './Carousel';
import VideoComponent from './VideoComponent';
import Events from './Events';
import InfiniteImageScroller from './InfiniteImageScroller';
import { Helmet } from 'react-helmet';
import { images } from './ImageComponent';
// import Dashboard from './Dashboard';

const Home = () => {

  return (
    <React.Fragment>
         <Helmet>
        <title>Home - Official IIM Tiruchirappalli</title>
        </Helmet>
       <VideoComponent/>
           <Marquee/>
           <Events/>
           {/* <CustomCarousel/> */}
           {/* <Dashboard/> */}
           <InfiniteImageScroller images={images} />
    </React.Fragment>
  )
}

export default Home