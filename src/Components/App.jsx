import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import NewNotes from "./NewNotes";
import Footer from "./Footer.jsx";

function App() {
  const [notesArray, setNotesArray] = useState([]);

  function handelBtnClick(props) {
    console.log(props);
    setNotesArray((preVal) => {
      return [...preVal, props];
    });
  }

  function handelDeleteNote(idToDelete) {
    setNotesArray((preVal) => {
      return preVal.filter((note, index) => {
        return index !== idToDelete;
      });
    });
  }

  return (
    <div className="container-fluid px-0">
      <Header />
      <Note onClick={handelBtnClick} />
      <div className="container mb-200 handelSmallScreen">
        <NewNotes title="Title" content="Content here" defaultNote={true} />

        {notesArray.map((oneNote, index) => {
          return (
            <NewNotes
              key={index}
              id={index}
              title={oneNote.title}
              content={oneNote.content}
              onClick={handelDeleteNote}
            />
          );
        })}
        
      </div>
      <Footer />
    </div>
  );
}

export default App;
