import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import FooterStyle from "./footer.module.css";

const Footer = () => {
  return (
    <div className={FooterStyle.container}>
      <p>2022 Next and stipe test. MVP</p>
      <p className={FooterStyle.iconsContainer}>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
