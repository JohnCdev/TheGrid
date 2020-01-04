import React, { useContext } from "react";
import {AuthContext} from '../../context/AuthContext';

export default function JoinClan(props) {
  const {userData} = useContext(AuthContext)
  let button;
  if(userData.clans){
    const member = userData.clans.includes(props.clanName)
    button = !member ? (
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.joinClan()}
      >
        Join Clan
      </button>
    ) : (
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => props.leaveClan()}
      >
        Leave Clan
      </button>
    );
  } else button = ""

  return button;
}
