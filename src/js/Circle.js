import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";

export default function Circle() {
  let circle = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });
  // useEffect(() => {
  //   tl.from(circle, 2, { opacity: 0, ease: Power3.easeOut }, 0.8);
  // }, [tl]);

  return <div className="bg-circle" ref={el => (circle = el)}></div>;
}
