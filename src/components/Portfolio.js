import React, { Component, useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {
  Media, Carousel, CarouselItem
} from 'react-bootstrap';


function Portfolio(props) {
  const [index, setIndex] = useState(0);
  let { resumeData } = props
  let portfolio = resumeData.portfolio
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="row projects " style={{ width: "1200px", margin: "0 auto" }}>
        <div className="three columns header-col " style={{ paddingBottom: "40px" }}>
          <h1><span>PROJECTS</span></h1>
        </div>
        <div className="nine columns main-col" style={{
          width: "100%",
          paddingLeft: "10%"
        }}>
          <Carousel activeIndex={index} onSelect={handleSelect} >
            {
              portfolio && portfolio.map((item) => {
                return (

                  <Carousel.Item key={item.key}>
                    <div style={{ display: "flex" }}>
                      <img
                        width="60%"
                        className="mr-3"
                        src={item.imgurl}
                        alt="Generic placeholder"
                      />
                      <div className="caroselContent">
                        <h5 className="project-name">{item.name}</h5>
                        <p className="project-desc">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Carousel.Item>

                )
              })
            }

          </Carousel>
        </div>
      </div>
    </section>
  );
}


export default Portfolio;