import React from "react";
import "./Booking.scss"
import BulletinBoard from "./BulletinBoard";

export default function Booking(props) {
  return (
    <div className="book-view">
      <div className="book">
        I am a booking component
      </div>
      <BulletinBoard />
    </div>
  );
}