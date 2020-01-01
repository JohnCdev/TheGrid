import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
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


let imgRef="";

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
    default:
      return imgRef="";
  }
}

const ProfileIcon = ({ profileImg, large = false }) => {
  const imgSize = large ? 50 : 25;

  reRender(profileImg)

  return (

    <img
      style={{ borderRadius: 50, width: imgSize, height: imgSize }}
      src={imgRef}
    />
  )
}
export default ProfileIcon;