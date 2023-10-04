import React, { useState } from "react";
import "./styles1.css";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div className="note">
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Add a note.."
          rows="3"
        />
        <button
          className="addbtn"
          onClick={submitNote}
          style={{ fontSize: "25px", fontWeight: "bold" }}
        >
          +
        </button>
      </form>
    </div>
  );
}
export default CreateArea;
