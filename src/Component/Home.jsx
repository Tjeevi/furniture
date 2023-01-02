import React from 'react'
//import cardd from "./Assets/card11.jfif"
import {Link} from "react-router-dom"
import "./Style.css"
import Carousel from 'react-bootstrap/Carousel'
import img1 from "./Assets/dt3.jfif"
import img2 from "./Assets/pm8.jfif"
import img3 from "./Assets/pc4.jfif"
import img4 from "./Assets/ts10.jfif"
import { BsWhatsapp } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";




function Home() {
  return (
    <div className='homeee'>
         <section id="home">
          <div class="row">
             <div class="col-lg-6 col-md-6 col-12 order-1 pt-5"><h1 class="display-4" className='heading'>THE LATEST <span className='aa'>FURNITURE</span></h1>
        <p class="my-lg-2 my-3">When you design a furniture website, make sure that its color palette and identity are consistent throughout the website - this shows that you are scrupulous and reliable.</p>
        <button class="btn btn-primary my-4"><Link to="productpage" className='btnn'>View Product</Link></button></div>

     <div class="col-lg-6 col-md-6 col-12 py-lg-0 py-3 order-sm-2 ">

        <Carousel interval={500}>
      <Carousel.Item >
        <img
          src={img1} height="400px" width={400}
          alt="First slide"  id="slide"
        />
    </Carousel.Item>
      <Carousel.Item >
        <img
          src={img2} height="400px" width={400}
          alt="Second slide"  id="slide"
        />
      </Carousel.Item>
      <Carousel.Item >
        <img
          src={img3} height="400px" width={400}
          alt="Third slide" id="slide"
        />
      </Carousel.Item>
    <Carousel.Item >
        <img
          src={img4} height="400px" width={400}
          alt="Third slide" id="slide"
        />
      </Carousel.Item>
    </Carousel>


     </div>
    </div>
</section>
<div className='link'>
<a href='Tel:+918344915148' target="blank" ><BiPhoneCall color="blue" fontSize={40}/></a>
<a href='https://wa.me/918344915148' target="blank" ><BsWhatsapp color='green' fontSize={40}/></a>
</div>
 </div>
  )
}

export default Home


