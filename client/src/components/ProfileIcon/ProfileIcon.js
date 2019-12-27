import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./profileIcon.css"

const  ProfileIcon = ({img, large=false}) => {
  const imgSize = large ? 50 : 25;
    return(
      <Link to="/profile">
      <img
      style={{borderRadius: 50, width: imgSize, height: imgSize}}
      src="https://pbs.twimg.com/profile_images/897250392022540288/W1T-QjML_400x400.jpg">
      </img>
      </Link>
    )

}
export default ProfileIcon;