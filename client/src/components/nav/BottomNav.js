import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
function BottomNav() {
  const bottomNav = useRef();
  const [bottomNavReachTop, setBottomNavReachTop] = useState(false);

  const history = useHistory();

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

  const handleAuth = (to) => {
    history.push(to);
  };

  return (
    <div className="knav__bottomNav" ref={bottomNav}>
      <ul className="knav__botNav_left">
        <li className="knav__botNav_guide">Kartiyo</li>
      </ul>
      <ul className="knav__botNav_mid">
        <li className="knav__botNav_guide">Home</li>
        <li className="knav__botNav_guide">Pricing & Services</li>
        <li className="knav__botNav_guide">Refer friend</li>
        <li className="knav__botNav_guide">How it works </li>
        <li className="knav__botNav_guide">FAQs</li>
        <li className="knav__botNav_guide">Contact</li>
      </ul>
      <ul className="knav__botNav_right">
        <li
          className="knav__botNav_guide"
          onClick={() => handleAuth("/auth/login")}
        >
          Login
        </li>
        <li
          className="knav__botNav_guide"
          onClick={() => handleAuth("/auth/signup")}
        >
          Signup
        </li>
      </ul>
    </div>
  );
}

export default BottomNav;
