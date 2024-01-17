import React from 'react'
import ResponsiveAppBar from './components/Navbar'
import Component_1 from './components/Component_1'
import navbottom_img from './assets/navbottom_img.avif'
import Carousel_Area from './components/Carousel_Area'
import 'swiper/css';
import Items from './components/Items'
import Card_Section_One from './components/Card_Section_One'
import Card_Section_Two from './components/Card_Section_Two'
import CarouselArea_2 from './components/CarouselArea_2'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <ResponsiveAppBar />
      <div style={{ width: "100%" }} className="secnav">

        <Component_1 />
      </div>
      <img width={"100%"} src={navbottom_img} alt="" />
      <br />
      <Carousel_Area />
      <Items />
      <Card_Section_One />
      <div style={{ width: "100%" }} >
        <h1 style={{ padding: "20px" }}>Recommended for you</h1>
      </div>
      <Card_Section_Two />
      <div style={{ margin: "2%" }} className="ccoonntt">
        <img width={"100%"} src="https://f.nooncdn.com/ads/banner-1440x1440/en_dk_uae-pca-01.1705394595.0481217.png?format=avif" alt="" />
        <p style={{ textAlign: "right" }}>SPONSORED</p>
      </div>

      <div style={{ width: "100%", backgroundColor: "rgb(229, 230, 230)" }} >
        <h1 style={{ padding: "20px" }}>Trending deals in TV & accessories</h1>

        <Card_Section_Two />
      </div>
      <div style={{ width: "100%", backgroundColor: "rgb(235, 235, 235)" }} >
        <h1 style={{ padding: "20px" }}>Clearance deals</h1>

        <Card_Section_Two />
      </div>
      <CarouselArea_2 />
      <br /><hr style={{ width: "100%", border: "1px solid lightgray" }} />
      <br />
      <Footer />


    </>
  )
}

export default App