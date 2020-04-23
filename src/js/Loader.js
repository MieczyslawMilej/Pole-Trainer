import React, {useEffect, useRef} from "react";
import {TimelineLite ,TweenMax, Power3} from 'gsap';

export default function Loader() {


    let loader = useRef(null);
    let tl = new TimelineLite({ delay: 0.8 });
    useEffect(() => {

      tl.from(loader, 2, { opacity: 0, ease: Power3.easeOut}, .8)

    }, [tl]);

  return (
    <div ref={el => loader = el}>
      <div id="vignette"></div>
      <div id="container">
        <div id="pos">
          <div className="cube">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="shadow"></div>
          </div>
          <div className="cube">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="shadow"></div>
          </div>
          <div className="cube">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="shadow"></div>
          </div>
          <div className="cube">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="shadow"></div>
          </div>
          <div className="cube">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="shadow"></div>
          </div>
          <div className="cube">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="shadow"></div>
          </div>
          <div className="cube">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="shadow"></div>
          </div>
          <div className="cube">
            <div className="left"></div>
            <div className="center"></div>
            <div className="right"></div>
            <div className="bottom"></div>
            <div className="shadow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
