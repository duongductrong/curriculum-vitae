import React, { FC, useState, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { Link } from "react-router-dom";
import { ic_home } from "react-icons-kit/md/ic_home";
import { ic_person_outline } from "react-icons-kit/md/ic_person_outline";
import { ic_settings } from "react-icons-kit/md/ic_settings";
import { ic_remove_red_eye } from "react-icons-kit/md/ic_remove_red_eye";
import { ic_mail } from "react-icons-kit/md/ic_mail";
import { socialFacebookCircular } from "react-icons-kit/typicons/socialFacebookCircular";
import { socialInstagramCircular } from "react-icons-kit/typicons/socialInstagramCircular";
import { socialLinkedin } from "react-icons-kit/typicons/socialLinkedin";
import { socialGithub } from "react-icons-kit/typicons/socialGithub";

import "./navbar.scss";

const storage_active = "navbar_acitve";

const navbarItems = [
  { id: "home", path: "/curriculum-vitae/", icon: ic_home },
  { id: "about", path: "/curriculum-vitae/about", icon: ic_person_outline },
  { id: "skills", path: "/curriculum-vitae/skills", icon: ic_settings },
  { id: "project", path: "/curriculum-vitae/project", icon: ic_remove_red_eye },
  { id: "contact", path: "/curriculum-vitae/contact", icon: ic_mail },
];

export interface NavBarProps {}

const Navbar: FC<NavBarProps> = () => {
  const [navActive, setNavActive] = useState(() => {
    const index = navbarItems.findIndex(
      // find lists and return match with pathname
      (nav) => nav.id === window.location.pathname.split("/")[2] ||  nav.id === window.location.pathname.split("/")[1]
    );

    return navbarItems[index]?.id || navbarItems[0].id;
  });

  // console.log(navbarItems.findIndex((nav) => nav.id === window.location.pathname.split("/")[2]));

  const onHandleActive = (itemActive: string) => () => {
    // change state
    setNavActive(itemActive);

    // save active item
    window.localStorage.setItem(storage_active, itemActive);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">DDT</div>
      <div className="navbar__route">
        {navbarItems.map((navbar) => (
          <Link
            key={navbar.id}
            className={`navbar__route__link${
              navActive === navbar.id ? ` navbar--active` : ""
            }`}
            to={navbar.path}
            onClick={onHandleActive(navbar.id)}
          >
            <Icon
              className="navbar__route__link__icon"
              size={30}
              icon={navbar.icon}
            />
          </Link>
        ))}
      </div>
      <div className="navbar__network">
        <a
          target="__blank"
          href="https://www.facebook.com/trong.duong.77398"
          className="navbar__network__brand"
        >
          <Icon size={28} icon={socialFacebookCircular} />
        </a>
        <a
          target="__blank"
          href="https://github.com/duongductrong"
          className="navbar__network__brand"
        >
          <Icon size={28} icon={socialGithub} />
        </a>
        <a
          target="__blank"
          href="https://www.instagram.com/_duongductrong/"
          className="navbar__network__brand"
        >
          <Icon size={28} icon={socialInstagramCircular} />
        </a>
        <a
          target="__blank"
          href="https://www.linkedin.com/in/duongductrong/"
          className="navbar__network__brand"
        >
          <Icon size={28} icon={socialLinkedin} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
