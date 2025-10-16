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
  const x = useMotionValue(0); // posição x do inner
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // 👉 Atualiza o índice conforme a posição x do inner
  useEffect(() => {
    const unsubscribe = x.onChange((value) => {
      const totalWidth = width;
      const slideWidth = totalWidth / (images.length - 1);
      const index = Math.round(-value / slideWidth); // negativo porque arrastar é negativo
      setActiveIndex(index);
    });
    return () => unsubscribe();
  }, [x, width]);

  return (
    <div className="container">
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

      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`dot ${activeIndex === index ? "active" : ""}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carrosel;
