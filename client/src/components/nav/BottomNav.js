import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

function BottomNav() {
  const bottomNav = useRef();
  const [bottomNavReachTop, setBottomNavReachTop] = useState(false);

  useLayoutEffect(() => {
    if (bottomNavReachTop) bottomNav.current.classList.add("active");
    if (!bottomNavReachTop) bottomNav.current.classList.remove("active");
    // bottomNav.current.classList.add("active");
    console.log(bottomNav.current.classList);
  }, [bottomNavReachTop]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(bottomNav.current.getBoundingClientRect());
      let { top } = bottomNav.current.getBoundingClientRect();
      if (top <= 0) {
        setBottomNavReachTop(true);
      } else {
        setBottomNavReachTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="knav__bottomNav" ref={bottomNav}>
      <ul className="knav__botNav_mid">
        <li className="knav__botNav_guide">Home</li>
        <li className="knav__botNav_guide">Pricing & Services</li>
        <li className="knav__botNav_guide">Refer friend</li>
        <li className="knav__botNav_guide">How it works </li>
        <li className="knav__botNav_guide">FAQs</li>
        <li className="knav__botNav_guide">Contact</li>
      </ul>
    </div>
  );
}

export default BottomNav;
