import React from "react";
import "./clanPicture.css";
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

let imgRef="";

const reRender = profileImg => {
  switch (profileImg) {
    case "default1":
      return imgRef = default1;
    case "default2":
      return imgRef = default2;
    case "default3":
      return imgRef = default3;
    case "default4":
      return imgRef = default4;
    case "default5":
      return imgRef = default5;
    case "default6":
      return imgRef = default6;
    case "default7":
      return imgRef = default7;
    case "default8":
      return imgRef = default8;
    case "default9":
      return imgRef = default9;
    case "default10":
      return imgRef = default10;
    default:
      return imgRef="";
  }
}

export default function ClanPicture({ clanImg }) {

  reRender(clanImg);

  return (
    <div className="clanProfilePicture">
      <img className="img-thumbnail" src={imgRef} />
    </div>
  );
}