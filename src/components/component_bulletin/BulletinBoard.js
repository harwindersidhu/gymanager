import React from "react";
import Bulletin from "./Bulletin";
import BulletinForm from "./BulletinForm";
import "./BulletinBoard.scss";
import useBulletinBoardData from "../../hooks/useBulletinBoardData";
import { format } from 'timeago.js';

export default function BulletinBoard(props) {

  const { today, bulletinData } = useBulletinBoardData();

  //var today = new Date();
  // console.log("Bulletin data: ", bulletinData)
  // console.log("Today: ", today, format(today));
  // console.log("Time ago: ", format('2022-10-05 19:30:55'));

  const bulletinItems = bulletinData.map((bulletin) => {
    return (
      <Bulletin key={bulletin.id} title={bulletin.title} description={bulletin.description} time={format(bulletin.created_at)} />
    );
  });

  return (
    <div className="bulletin-board">
      <div className="bulletin-items-container">
        {bulletinItems}
      </div>
      <BulletinForm />
      {/* <div className="bulletin-form">
        <BulletinForm />
      </div> */}
    </div>
  );
}