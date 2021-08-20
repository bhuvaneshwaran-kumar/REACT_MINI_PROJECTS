import React from "react";
import { FaFacebookF as FaseBookIcon } from "react-icons/fa";
import {
  AiFillTwitterCircle as TwitterIcon,
  AiFillYoutube as YouTubeIcon,
  AiFillInstagram as InstagramIcon,
} from "react-icons/ai";
import { IoIosCall as PhoneIcon } from "react-icons/io";
import { FiMail as MailIcon } from "react-icons/fi";
function TopNav() {
  return (
    <div className="knav__topNav">
      <div className="knav__topNav_left">
        <li className="knav__topNav_guide">SHIPPING CALCULATOR</li>
        <li className="knav__topNav_guide">ASSISTED PURCHASE</li>
      </div>
      <div className="knav__topNav_right">
        <div className="knav__topNav_col">
          <FaseBookIcon size="1.1em" className="knav__icons" />
          <span className="knav__icons_label">FaceBook</span>
        </div>
        <div className="knav__topNav_col">
          <TwitterIcon size="1.1em" className="knav__icons" />
          <span className="knav__icons_label">Twitter</span>
        </div>
        <div className="knav__topNav_col">
          <YouTubeIcon size="1.1em" className="knav__icons" />
          <span className="knav__icons_label">YouTube</span>
        </div>
        <div className="knav__topNav_col">
          <InstagramIcon size="1.1em" className="knav__icons" />
          <span className="knav__icons_label">InstGram</span>
        </div>
        <div className="knav__topNav_col">
          <PhoneIcon size="1.1em" className="knav__icons" />
          <span className="knav__icons_label">+91 9999999999</span>
        </div>
        <div className="knav__topNav_col">
          <MailIcon size="1.1em" className="knav__icons" />
          <span className="knav__icons_label">kartiyo@gmail.com</span>
        </div>
      </div>
      {/* <i class="bi bi-twitter"></i> */}
    </div>
  );
}

export default TopNav;
