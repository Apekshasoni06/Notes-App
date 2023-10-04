import React from "react";
import "./styles1.css";
import img from "./icons8-dustbin-53.png";
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  return (
    <div className="newnote">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="deletebtn" onClick={handleClick}>
        <img width="20" height="22" src={img} />
      </button>
    </div>
  );
}
export default Note;
