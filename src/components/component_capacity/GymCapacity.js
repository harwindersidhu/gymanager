import React from "react";
import BulletinBoard from "../component_bulletin/BulletinBoard";
import "./GymCapacity.scss";
import Graphs from "./Graphs";
import Form from "./Form";
import useGraphData from "../../hooks/useGraphData";

export default function GymCapacity(props) {

  const { date } = useGraphData();

  function saveFormData(time, numberOfPeople) {
    const today = new Date();
    const day = today.toLocaleDateString('en-US', {
      weekday: 'long',
    });
    console.log("Form data: ", day, date, time, numberOfPeople);
  }
  return (
    <div className="capacity-view">
      <div className="gym-capacity">
        <div className="row-one">
          <Graphs />
        </div>
        <div className="row-two">
          <Form onSave={(time, numberOfPeople) => saveFormData(time, numberOfPeople)}/>
        </div>
      </div>
      <BulletinBoard />
    </div>
  );
}