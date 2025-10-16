import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import ImgSlide from "../../assets/Img/slide.png";
import ImgSlide2 from "../../assets/Img/slide2.png";
import ImgSlide3 from "../../assets/Img/slide3.png";
import ImgSlide4 from "../../assets/Img/slide4.png";
import "./Carrosel.css";

const images = [ImgSlide, ImgSlide2, ImgSlide3, ImgSlide4];

function Carrosel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const x = useMotionValue(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    const unsubscribe = x.onChange((value) => {
      const totalWidth = width;
      const slideWidth = totalWidth / (images.length - 1);
      const index = Math.round(-value / slideWidth);
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [x, width]);

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2 className="carousel-title">Veja o que temos de melhor</h2>
      </div>

      <div className="carousel-container">
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            style={{ x }}
          >
            {images.map((image, index) => (
              <motion.div className="item" key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <div className="indicator-wrapper">
          {images.map((_, index) => (
            <div
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carrosel;
