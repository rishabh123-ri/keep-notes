import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
// import Button from "./Button";

const CreateNotes = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const eventInput = (event) => {
    const { name, value } = event.target;

    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };
  const addEvent = () => {
    props.passNote(note);

    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };
  const btonormal = () => {
    setExpand(false);
  };

  const plus = {
    backgroundColor: "#fff",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "100%",
    padding: "9px",
    // float: "right",
    position: "absolute",
    bottom: "-30px",
  };
  const icon = {
    fontSize: "42px",
    color: "#f9b625",
  };
  return (
    <>
      <div className="Create_notes" onDoubleClick={btonormal}>
        <form className="Forms" onSubmit={(e) => e.preventDefault()}>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={eventInput}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={eventInput}
            placeholder="Write a note"
            onClick={expandIt}
          ></textarea>
          {expand ? (
            <Button style={plus} onClick={addEvent}>
              <AddIcon style={icon} />
            </Button>
          ) : null}

          {/* <Button
            Icon={AddIcon}
            iconStyle={icon}
            containerStyle={plus}
            onClick={addEvent}
          /> */}
        </form>
      </div>
    </>
  );
};

export default CreateNotes;
