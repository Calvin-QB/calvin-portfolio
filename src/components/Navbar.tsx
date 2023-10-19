import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [mobileNavbarDisplay, setMobileNavbarDisplay] =
    useState<boolean>(false);

  const handleMenuClick = () => {
    setMobileNavbarDisplay((prevState) => !prevState);
  };

  return (
    <div>
      <header className="z-50 text-base text-center md:flex md:flex-row md:item-center md:justify-end md:inset-x-0 md:top-0 md:bottom-[92%] fixed">
        <nav
          className={`${
            mobileNavbarDisplay ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 pt-36 gap-20 flex flex-col backdrop-blur-md backdrop-brightness-90 fixed inset-y-0 right-0 left-[20%] md:translate-x-0 md:backdrop-blur-0 md:backdrop-brightness-100 md:static md:pt-0 md:flex-row md:items-center md:justify-end md:gap-10 md:mr-5`}
        >
          <Link to="home" activeClass="active" spy={true} smooth={true}>
            <div className="hover:cursor-pointer">Home</div>
          </Link>
          <Link to="about" activeClass="active" spy={true} smooth={true}>
            <div className="hover: cursor-pointer">About Me</div>
          </Link>
          <Link to="projects" activeClass="active" spy={true} smooth={true}>
            <div className="hover: cursor-pointer">Projects</div>
          </Link>
        </nav>

        <FontAwesomeIcon
          icon={mobileNavbarDisplay ? faX : faBars}
          className="fixed right-16 top-8 z-20 text-2xl md:collapse"
          onClick={handleMenuClick}
        ></FontAwesomeIcon>
      </header>
    </div>
  );
};

export default Navbar;
