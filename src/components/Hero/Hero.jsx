import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Hero.css'

const Hero = () => {
    return (
        <div>
              <section id="hero" className="d-flex align-items-center">
    <div className="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div className="row">
        <div className="col-lg-8">
          <h1>Welcome to <span>Restaurantly</span></h1>
          <h2>Delivering great food for more than 18 years!</h2>

          <div className="btns">
            <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
            <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
          </div>
        </div>

      </div>
    </div>
  </section>
        </div>
    )
}

export default Hero
