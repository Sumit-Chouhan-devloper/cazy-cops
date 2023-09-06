import { React, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Nav } from "react-bootstrap";
import nav_logo from "../assets/images/webp/logo.webp"
import twitter_logo from "../assets/images/svg/twitter.svg"
import discord_logo from "../assets/images/svg/discord.svg"
import insta_logo from "../assets/images/svg/instagram.svg"
const MyNav = () => {
  const [Show, setShow] = useState(true);
  function showNav() {
    setShow(
      !Show,
      document.getElementById("nav_bar_animation").classList.toggle("opennav"),
      document.getElementById("dis_none").classList.toggle("logo_not_visible")
    );
  }
  if (!Show) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <Nav className="position-relative z-3 w-100 py_10">
        <div className="my_container container d-flex justify-content-between align-items-center">
          <div id="dis_none" className="d-flex align-items-center">
            <a href="#home">
              <img
                width={42}
                height={60}
                src={nav_logo}
                alt="page logo"
                className="w-100"
              />
            </a>
            <p className="ff_chewy fs_3xl fw-normal txt_orange mb-0 ps-2 c_pointer">
              Cozy <span className="txt_green">Capys</span>
            </p>
          </div>
          <div className="d-lg-flex align-items-center justify-content-between d-none d-lg-block">
            <ul className="d-flex justify-content-between align-items-center mb-0 gap-4 p-2">
              <li>
                <a href="#home" className="text-white ">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#impact" className="text-white">
                  Impact
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-white">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="gap-2 d-lg-flex d-none d-lg-block">
            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" className="nav_socal_icon" target="blank"><img height={15} width={18} src={twitter_logo} alt="twitter logo" /></a>
            <a href="https://discord.com/channels/@me" target="blank" className="nav_socal_icon"><img height={15} width={20} src={discord_logo} alt="discord logo" /></a>
            <a href="instagram.com" className="nav_socal_icon"target="blank"><img height={19} width={19} src={insta_logo} alt="insta logo" /></a>
          </div>
          <div
            className="d-flex justify-content-between flex-column d-lg-none "
            onClick={showNav}
          >
            <h2 className="position-relative text-white fs_4xl z_100">
              {Show ? <HiMenuAlt1 /> : <AiOutlineClose />}
            </h2>
          </div>
          <div className={`d-flex sm_nav d-lg-none ${Show ? "" : "start-0"}`}>
            <ul
              id="nav_bar_animation"
              className="d-flex justify-content-between flex-column gap-3 align-items-center mb-0 ps-0 nav_animation"
            >
              <li onClick={showNav}>
                <a href="#home" target='blank'>
                  Home
                </a>
              </li>
              <li onClick={showNav}>
                <a href="#about" target='blank'>
                  About
                </a>
              </li>
              <li onClick={showNav}>
                <a href="#impact" target='blank'>
                  Impact
                </a>
              </li>
              <li onClick={showNav}>
                <a href="#roadmap" target='blank'>
                  Roadmap
                </a>
              </li>
              <li onClick={showNav}>
                <a href="#faq" target='blank'>
                  FAQ
                </a>
              </li>
            </ul>
            <div className="gap-2 d-flex mt-4">
              <a target='blank' href="#https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den" className="nav_socal_icon"><img height={15} width={18} src={twitter_logo} alt="twitter logo" /></a>
              <a target='blank' href="#https://www.google.com/search?q=discord&rlz=1C1GCEA_enIN1061IN1061&oq=di&gs_lcrp=EgZjaHJvbWUqBggBEEUYOzIGCAAQRRg8MgYIARBFGDsyBggCEEUYOTIGCAMQRRg7MgYIBBBFGDsyDQgFEAAYgwEYsQMYgAQyBggGEEUYPDIGCAcQRRg80gEIMTA1M2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8" className="nav_socal_icon"><img height={15} width={20} src={discord_logo} alt="discord logo" /></a>
              <a target='blank' href="#instagram.com" className="nav_socal_icon"><img height={19} width={19} src={insta_logo} alt="insta logo" /></a>
            </div>
          </div>
        </div>
      </Nav>
    </>
  );
};

export default MyNav;
