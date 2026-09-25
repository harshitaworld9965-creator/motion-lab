import { useEffect, useRef } from "react";
import gsap from "gsap";

import './App.css'

function App() {
  const motion = useRef(null);
  const language = useRef(null);
  const letters = useRef([]);
  const button = useRef(null);
  const cards = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(motion.current, {
        x:-100,
        duration:1,
        ease:"power3.out"
      })
      gsap.from(language.current, {
        y:100,
        duration:1.5,
        ease:"power2.out"
      })
      gsap.to(motion.current, {
        x:50,
        duration:0.5,
        ease:"power2.inOut"        
      })
      gsap.from(letters.current, {
        y:-80,
        duration:2.0,
        ease:"back.out",
        stagger:1,
      })
      gsap.from(button.current, {
  scale: 0,
  duration: 1,
  ease: "back.out",
});
    });

    return ()=> ctx.revert();
  }, []);
  return (
    <main className="stage">
      <p className="number">01</p>

      <div className="type">
        <h1 ref={motion}>MOTION</h1>
        <h1 ref={language}>LANGUAGE.</h1>
      </div>
      <div className="letters">
  <span ref={(el) => (letters.current[0] = el)}>M</span>
  <span ref={(el) => (letters.current[1] = el)}>O</span>
  <span ref={(el) => (letters.current[2] = el)}>T</span>
  <span ref={(el) => (letters.current[3] = el)}>I</span>
  <span ref={(el) => (letters.current[4 ] = el)}>O</span>
  <span ref={(el) => (letters.current[5] = el)}>N</span>
</div>
<button
  ref={button}
  className="magnetic-button"
  onMouseEnter={() => {
    gsap.to(button.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
    });
  }}
  onMouseLeave={() => {
    gsap.to(button.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  }}
>
  ENTER
</button>
<div className="cards">
  <div ref={(el) => (cards.current[0]=el)} className="card">
    <span>01</span>
    <h2>MOTION</h2>
  </div>

  <div ref={(el) => (cards.current[1] = el)} className="card">
    <span>02</span>
    <h2>TYPE</h2>
  </div>

  <div ref={(el) => (cards.current[2] = el)} className="card"
    onMouseEnter={() => {
      gsap.to(cards.current[2], {
        scale:1.2,
        duration:0.3,
        ease:"power2.out",
      });
    }}
    onMouseLeave={() => {
      gsap.to(cards.current[2], {
        scale:1,
        duration:0.5,
        ease:"power2.out"
      });
    }}
    >
    <span>03</span>
    <h2>FORM</h2>
  </div>
</div>
    </main>
  );
}

export default App;