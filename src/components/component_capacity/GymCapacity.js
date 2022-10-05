import React from "react";
import BulletinBoard from "../component_bulletin/BulletinBoard";
import "./GymCapacity.scss";
import Graphs from "./Graphs";
import Form from "./Form";

export default function GymCapacity(props) {
  return (
    <div className="capacity-view">
      <div className="gym-capacity">
        <div className="row-one">
          <Graphs />
        </div>
        <div className="row-two">
          <Form />
        </div>
      </div>
      <BulletinBoard />
    </div>
  );
}