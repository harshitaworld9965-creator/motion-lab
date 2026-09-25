import { useEffect, useRef } from "react";
import gsap from "gsap";

import './App.css'

function App() {
  const motion = useRef(null);
  const language = useRef(null);
  const letters = useRef([]);

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
        duration:1.0,
        ease:"back.out",
        stagger:0.12,
      })
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
    </main>
  );
}

export default App;