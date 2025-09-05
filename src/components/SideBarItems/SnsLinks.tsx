import React from "react";
import SnsIcon from "../SnsIcon";
import { FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiPencilCircle, PiPencilCircleLight } from "react-icons/pi";

export default function SnsLinks() {
  return (
    <>
      <SnsIcon IconType={FaGithub} link="https://github.com/shuya-tamaru" />
      <SnsIcon
        IconType={FaYoutube}
        link="https://www.youtube.com/@studioTama"
      />
      <SnsIcon IconType={FaXTwitter} link="https://twitter.com/tama20013" />
      <SnsIcon
        IconType={FaInstagram}
        link="https://www.instagram.com/shuya_tamaru/"
      />
      <SnsIcon IconType={PiPencilCircle} link="https://note.com/tamaru_shuya" />
    </>
  );
}
