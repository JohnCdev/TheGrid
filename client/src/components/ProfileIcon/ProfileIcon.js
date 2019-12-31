import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./profileIcon.css"
import default1 from "../../images/profileImages/default1.jpg";
import default2 from "../../images/profileImages/default2.jpeg";
import default3 from "../../images/profileImages/default3.jpg";
import default4 from "../../images/profileImages/default4.jpg";
import default5 from "../../images/profileImages/default5.jpg";
import default6 from "../../images/profileImages/default6.jpeg";
import default7 from "../../images/profileImages/default7.png";
import default8 from "../../images/profileImages/default8.jpeg";
import default9 from "../../images/profileImages/default9.jpg";
import default10 from "../../images/profileImages/default10.webp";


const  ProfileIcon = ({img, large=false}) => {
  const imgSize = large ? 50 : 25;
    return(
      <img
      style={{borderRadius: 50, width: imgSize, height: imgSize}}
      src={default1} 
      />
    )
}
export default ProfileIcon;