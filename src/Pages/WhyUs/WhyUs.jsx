import React from 'react'
import './WhyUs.css'
import {whyUsItems} from '../../data'

const WhyUs = () => {
    return (
        <div>
      <section id="why-us" className="why-us mt-3 mb-3">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Why Us</h2>
          <p>Why Choose Our Restaurant</p>
        </div>

        <div className="row">
          {whyUsItems.map(item =>(
            <div className="col-lg-4">
            <div className="box" data-aos="zoom-in" data-aos-delay="100">
              <span>{item.span}</span>
              <h4>{item.h4}</h4>
              <p>{item.p}</p>
            </div>
          </div>
          ))}

          {/* <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="200">
              <span>02</span>
              <h4>Repellat Nihil</h4>
              <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
            </div>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0">
            <div className="box" data-aos="zoom-in" data-aos-delay="300">
              <span>03</span>
              <h4> Ad ad velit qui</h4>
              <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
        </div>
    )
}

export default WhyUs
