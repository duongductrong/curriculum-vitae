import React, { FC } from "react";
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

export interface NavBarProps {}

const Navbar: FC<NavBarProps> = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">DDT</div>
      <div className="navbar__route">
        <Link className="navbar__route__link" to="/cv/">
          <Icon
            className="navbar__route__link__icon"
            size={30}
            icon={ic_home}
          />
        </Link>
        <Link className="navbar__route__link" to="/cv/about">
          <Icon
            className="navbar__route__link__icon"
            size={30}
            icon={ic_person_outline}
          />
        </Link>
        <Link className="navbar__route__link" to="/cv/skills">
          <Icon
            className="navbar__route__link__icon"
            size={30}
            icon={ic_settings}
          />
        </Link>
        <Link className="navbar__route__link" to="/cv/project">
          <Icon
            className="navbar__route__link__icon"
            size={30}
            icon={ic_remove_red_eye}
          />
        </Link>

        <Link className="navbar__route__link" to="/cv/contact">
          <Icon
            className="navbar__route__link__icon"
            size={30}
            icon={ic_mail}
          />
        </Link>
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
