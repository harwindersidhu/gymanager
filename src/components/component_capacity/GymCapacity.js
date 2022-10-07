import React, { useContext } from "react";
import BulletinBoard from "../component_bulletin/BulletinBoard";
import "./GymCapacity.scss";
import Graphs from "./Graphs";
import Form from "./Form";
import useGraphData from "../../hooks/useGraphData";
import { loginContext } from "../../providers/LoginProvider";

export default function GymCapacity(props) {
  const { date, setDate, presentHourData, presentDayData, saveCapacity } = useGraphData();
  const { user } = useContext(loginContext);

  return (
    <div className="capacity-view">
      <div className="gym-capacity">
        <div className="row-one">
          <Graphs date={date} setDate={(date) => setDate(date)} presentHourData={presentHourData} presentDayData={presentDayData} />
        </div>
        {user.isadmin && <div className="row-two">
          <Form onSave={(time, numberOfPeople) => saveCapacity(time, numberOfPeople)} />
        </div>}
      </div>
      <BulletinBoard />
    </div>
  );
}