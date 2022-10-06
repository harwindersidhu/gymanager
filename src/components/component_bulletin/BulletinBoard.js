import React from "react";
import Bulletin from "./Bulletin";
import BulletinForm from "./BulletinForm";
import "./BulletinBoard.scss";
import useBulletinBoardData from "../../hooks/useBulletinBoardData";
import { format } from 'timeago.js';

export default function BulletinBoard(props) {

  const { bulletinData, saveBulletin, editStatusOfBulletin } = useBulletinBoardData();

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
      <BulletinForm onSave={(title, description) => saveBulletin(title, description)} />
    </div>
  );
}