import React from "react";
import BulletinBoard from "./BulletinBoard";
import "./GymCapacity.scss"

export default function GymCapacity(props) {
  return (
    <div className="capacity-view">
      <div className="gym-capacity">
        I am a gym capacity component
      </div>
      <BulletinBoard />
    </div>
  );
}