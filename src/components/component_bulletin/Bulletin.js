import React from "react";

export default function Bulletin(props) {
  return (
    <article className="bulletin">
      <header className="bulletin--header">
        <h2 className="bulletin--heading">{props.title}</h2>
      </header>

      <div className="bulletin--body">
        <p>{props.description}</p>
      </div>

      <footer className="bulletin--footer">
        <label className="bulletin--age">{props.time}</label>
        <button className="bulletin-delete">Delete</button>
      </footer>
    </article>
  );
}