import React from "react";
import "./profileIcon.css"
import Default1 from "../../images/profileImages/Default1.jpg";
import Default2 from "../../images/profileImages/Default2.jpg";
import Default3 from "../../images/profileImages/Default3.jpg";
import Default4 from "../../images/profileImages/Default4.jpg";
import Default5 from "../../images/profileImages/Default5.jpg";
import Default6 from "../../images/profileImages/Default6.jpg";
import Default7 from "../../images/profileImages/Default7.jpg";
import Default8 from "../../images/profileImages/Default8.jpg";
import Default9 from "../../images/profileImages/Default9.jpg";
import Default10 from "../../images/profileImages/Default10.jpg";
import Clan1 from "../../images/clanImages/Clan1.jpg";
import Clan2 from "../../images/clanImages/Clan2.jpg";
import Clan3 from "../../images/clanImages/Clan3.jpg";
import Clan4 from "../../images/clanImages/Clan4.jpg";
import Clan5 from "../../images/clanImages/Clan5.jpg";

let imgRef = "";

const reRender = profileImg => {
  switch (profileImg) {
    case "Default1":
      return imgRef = Default1;
    case "Default2":
      return imgRef = Default2;
    case "Default3":
      return imgRef = Default3;
    case "Default4":
      return imgRef = Default4;
    case "Default5":
      return imgRef = Default5;
    case "Default6":
      return imgRef = Default6;
    case "Default7":
      return imgRef = Default7;
    case "Default8":
      return imgRef = Default8;
    case "Default9":
      return imgRef = Default9;
    case "Default10":
      return imgRef = Default10;
    case "Clan1":
      return imgRef = Clan1;
    case "Clan2":
      return imgRef = Clan2;
    case "Clan3":
      return imgRef = Clan3;
    case "Clan4":
      return imgRef = Clan4;
    case "Clan5":
      return imgRef = Clan5;
    default:
      return imgRef = "";
  }
}

const ProfileIcon = ({ profileImg, large = false }) => {
  const imgSize = large ? 50 : 25;

  reRender(profileImg)

  return (

    <img
      className="ml-2"
      style={{ 'borderRadius': '50px', 'width': imgSize, 'height': imgSize }}
      src={imgRef}
    />
  )
}
export default ProfileIcon;