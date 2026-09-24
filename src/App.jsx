import { useEffect, useRef } from "react";
import gsap from "gsap";

import './App.css'

function App() {
  const title = useRef(null);
  const items = useRef([]);
 useEffect(() => {
  gsap.to(title.current, {
    x:100,
    duration:3,
    ease:"power2.out",
  });
  gsap.from(items.current, {
    y:50,
    stagger:0.2,
  })
 }, []);

  return (
    <main>
      <h1 ref={title}>Motion Lab</h1>
      <div className="items">
        <span ref={(el)=>(items.current[0] = el)}>ONE</span>
        <span ref={(el) => (items.current[1] = el)}>TWO</span>
        <span ref={(el) => (items.current[2] = el)}>THREE</span>
        <span ref={(el) => (items.current[3] = el)}>FOUR</span>
        <span ref={(el) => (items.current[4] = el)}>FIVE</span>
      </div>
    </main>
  );
}
export default App;