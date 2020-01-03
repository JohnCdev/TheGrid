import React from "react";

export default function JoinClan(props) {
  const button = !props.member ? (
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

  return button;
}
