import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const frames = Array.from({ length: 168 }, (_, i) => `src/assets/chandrayan/video (${i+1}).jpg`);

const Chandrayan = () => {
  const containerRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        const index = Math.floor(self.progress * (frames.length - 1));
        setFrameIndex(index);
      },
    });
  }, []);

  return (
    <div ref={containerRef} style={{ height: "200vh", position: "relative" }}>
      <img
        src={frames[frameIndex]}
        alt={`Rocket frame ${frameIndex}`}
        style={{
          position: "sticky",
          top: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default Chandrayan;
