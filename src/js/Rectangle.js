import React, { useEffect, useRef } from "react";
import { TimelineLite, TweenMax, Power3 } from "gsap";

export default function Rectangle() {
  let rectangle = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });
  useEffect(() => {
    // tl.from(rectangle, 2, { opacity: 0, ease: Power3.easeOut }, 0.8);
  }, [tl]);

  return <div className="bg-rectangle" ref={el => (rectangle = el)}></div>;
}
