import React from "react";
import "./Booking.scss"
import BulletinBoard from "./BulletinBoard";

export default function Booking(props) {
  return (
    <>
      <BulletinBoard />
      <div className="book">
        I am a booking component
      </div>
    </>
  );
}