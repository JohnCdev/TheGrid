import React from "react";
import "./clanPicture.css";
import Clan1 from '../../images/clanImages/Clan1.jpg';
import Clan2 from '../../images/clanImages/Clan2.jpg';
import Clan3 from '../../images/clanImages/Clan3.jpg';
import Clan4 from '../../images/clanImages/Clan4.jpg';
import Clan5 from '../../images/clanImages/Clan5.jpg';

let imgRef="";

const reRender = clanImg => {
  switch (clanImg) {
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