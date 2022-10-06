import React from "react";
import Bulletin from "./Bulletin";
import "./BulletinBoard.scss"

export default function BulletinBoard(props) {

  const bulletins = [
    {
      title: "Title One",
      description: "Description One"
    },
    {
      title: "Title Two",
      description: "Description Two"
    }
  ];

  const bulletinItems = bulletins.map((bulletin) => {
    return (
      <Bulletin title={bulletin.title} description={bulletin.description} />
    );
  });

  return (
    <div className="bulletin-board">
      {bulletinItems}
    </div>
  );
}