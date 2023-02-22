import React from "react";
import Anime, { anime } from "react-anime";
import './animatedcontent.css';

const AnimatedContent = () => {
  anime({
    targets: ['div.box'],
    translateY: [
      { value: 200, duration: 500 },
      { value: 0, duration: 800 },
    ],
    rotate: {
      value: '1turn',
      easing: 'easeInOutSine',
    },
    delay: function(el, i, l) { return i * 1000 },
    loop: true,
  });
  return(
    <>
      <div className="box red"></div>
      <div className="box blue"></div>
      <div className="box green"></div>
      <div className="box yellow"></div>
    </>
  )
}

export default AnimatedContent;
