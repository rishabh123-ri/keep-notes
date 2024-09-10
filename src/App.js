import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateNotes from "./components/CreateNotes";
import Note from "./components/Note";

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    // alert(" clicked ");
    setAddItem((prevData) => {
      return [...prevData, note];
    });
    // console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((oldDate) =>
      oldDate.filter((cuurData, indx) => {
        return indx !== id;
      })
    );
  };
  return (
    <>
      <Header />

      <CreateNotes passNote={(notes) => addNote(notes)} />
      <div className="Main_note">
        {addItem?.length !== 0 &&
          addItem?.map((val, index) => {
            return (
              <Note
                Key={index}
                id={index}
                title={val.title}
                content={val.content}
                deleteitem={onDelete}
              />
            );
          })}
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default App;
