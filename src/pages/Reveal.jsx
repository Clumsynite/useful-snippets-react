/**
 * SOURCE: https://www.freecodecamp.org/news/reveal-on-scroll-in-react-using-the-intersection-observer-api/
 */
import React, { useEffect, useRef, useState } from "react";
import "../styles/Reveal.css";

const Reveal = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <div id="reveal_container">
      <header>This is the Header</header>
      <main ref={ref}>
        <div className="child-one">Child One</div>
        <div className="child-two">Child Two</div>
      </main>
      <footer>This is the Footer</footer>
    </div>
  );
};

export default Reveal;
