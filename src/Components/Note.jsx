import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Note(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
  });

  function handelClick() {
    setIsClicked(true);
  }

  function handelText(event) {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setNewNote((preVal) => {
      if (name === "title") {
        return {
          title: value,
          content: preVal.content,
        };
      } else {
        return {
          title: preVal.title,
          content: value,
        };
      }
    });
    // console.log(newNote);
  }

  function submitNote() {
    props.onClick(newNote);
    setNewNote({
      title: "",
      content: "",
    });
  }

  return (
    <div className="container mt-5 formWidth">
      <form>
        <div className="border border-2 rounded-3 shadow">
          <input
            onClick={handelClick}
            onChange={handelText}
            name="title"
            value={newNote.title}
            type="text"
            className="form-control mb-0 border-0 py-3 outlineNone"
            placeholder={isClicked ? "Title" : "Keep your notes organized"}
          ></input>

          {isClicked && (
            <div>
              <hr className="w-96 mx-auto my-2" />
              <textarea
                onChange={handelText}
                name="content"
                value={newNote.content}
                className="form-control mb-0 border-0 outlineNone"
                placeholder="Add content here. . ."
                rows="3"
                cols="20"
              ></textarea>
              {/* <button className="btn btn-warning color-light">Add</button> */}
              <div className="btn d-flex justify-content-end my-1">
                {/* <ArrowForwardIosIcon onClick={() =>{
                                return (props.onClick(newNote));
                            }}/> */}
                <ArrowForwardIosIcon onClick={submitNote} />
              </div>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default Note;
