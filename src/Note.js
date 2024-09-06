import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "./Button";
const Note = ({ title, content, deleteitem, id }) => {
  const deleteNote = () => {
    deleteitem(id);
  };
  const plus = {
    backgroundColor: "#fff",
    borderRadius: "100%",
    border: "2px solid #fff",
    float: "right",
    padding: "5px 7px",
    cursor: "pointer",
  };
  const icon = {
    fontSize: "30px",
    color: "#f9b625",
    border: "2px solid #fff",
    borderRadius: "100%",
    cursor: "pointer",
  };
  return (
    <div className="note">
      <h1 className="Note_title">{title} </h1>
      <br />
      <p className="Note_para"> {content} </p>

      <Button
        Icon={DeleteOutlineIcon}
        iconStyle={icon}
        containerStyle={plus}
        onClick={deleteNote}
      />
    </div>
  );
};
export default Note;
