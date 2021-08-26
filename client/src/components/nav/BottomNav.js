import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { setUser } from "../../actions/index";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose as GrCloseMenu } from "react-icons/gr";
function BottomNav({ loading }) {
  const bottomNav = useRef();
  const [bottomNavReachTop, setBottomNavReachTop] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (bottomNavReachTop) bottomNav.current.classList.add("active");
    if (!bottomNavReachTop) bottomNav.current.classList.remove("active");
    // bottomNav.current.classList.add("active");
    // console.log(bottomNav.current.classList);
  }, [bottomNavReachTop]);

  useLayoutEffect(() => {
    const handleScroll = () => {
      // console.log(bottomNav.current.getBoundingClientRect());
      let { top } = bottomNav.current.getBoundingClientRect();
      if (top <= 0) {
        setBottomNavReachTop(true);
      } else {
        setBottomNavReachTop(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth > 900) setOpenMenu(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAuth = (to) => {
    history.push(to);
  };

  const handleLogOut = async () => {
    const response = await fetch(`http://localhost:8080/api/auth/logout`, {
      headers: {
        accept: "application/json",
      },
      credentials: "include",
      method: "POST",
    });
    const data = await response.json();
    if (data.ok) {
      dispatch(setUser(null));
    }
  };

  return (
    <div
      className={openMenu ? "knav__bottomNav open_menu" : "knav__bottomNav"}
      ref={bottomNav}
    >
      <ul className="knav__botNav_menu">
        <li
          className="knav__botNav_guide icon"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {!openMenu ? (
            <GiHamburgerMenu fontSize="large" />
          ) : (
            <GrCloseMenu fontSize="large" />
          )}
        </li>
      </ul>
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

      {!loading && !user ? (
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
      ) : (
        <ul className="knav__botNav_right">
          <li className="knav__botNav_guide" onClick={handleLogOut}>
            Logout
          </li>
        </ul>
      )}
    </div>
  );
}

export default BottomNav;
