import React from "react";
import "./ProfilePicture.css";

export default function ProfilePicture(props) {
  return (
    <div className="ProfilePicture">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTstj276Y44IUaixarTbd_LZdGy8gleEjW7v9gRo0LPVzgQE0pamA&s" />
      <ul>
        <li>{props.name}</li>
        <li>{props.location}</li>
        <li>{props.age}</li>
      </ul>
    </div>
  );
}
