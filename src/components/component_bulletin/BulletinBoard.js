import React, { useContext } from "react";
import Bulletin from "./Bulletin";
import BulletinForm from "./BulletinForm";
import "./BulletinBoard.scss";
//import useBulletinBoardData from "../../hooks/useBulletinBoardData";
import { format } from 'timeago.js';

import { bulletinBoardContext } from "../../providers/BulletinBoardProvider";

export default function BulletinBoard() {

  const { bulletinData, editStatusOfBulletin } = useContext(bulletinBoardContext);

  const bulletinItems = bulletinData.slice().reverse().map((bulletin, index) => {
    return (
      <Bulletin key={bulletin.id} title={bulletin.title} description={bulletin.description} time={format(bulletin.created_at)} onDelete={() => editStatusOfBulletin(bulletin.id, bulletinData.length - index - 1)} />
    );
  });

  return (
    <div className="bulletin-board">
      <div className="bulletin-items-container">
        {bulletinItems}
      </div>
      <BulletinForm />
    </div>
  );
}