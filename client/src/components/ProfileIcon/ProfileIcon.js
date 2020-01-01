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



const  ProfileIcon = ({img, large=false}) => {
  const imgSize = large ? 50 : 25;
    return(
      <img
      style={{borderRadius: 50, width: imgSize, height: imgSize}}
      src={Default1} 
      />
    )
}
export default ProfileIcon;