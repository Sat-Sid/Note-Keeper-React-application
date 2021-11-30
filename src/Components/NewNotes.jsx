import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function NewNotes(props) {
  const colors = ["#cee5d0", "#f3f0d7", "#fed2aa", "#a8ece7"];
  const randomNumber = Math.floor(Math.random() * 4);
  const ramdonColor = colors[randomNumber];


  return (
    <div className="eachNotes me-5">
      <div
        className="border border-1 rounded-3 p-2 shadow my-5"
        style={{ backgroundColor: ramdonColor }}
      >
        <h5>
          <em>{props.title}</em>
        </h5>
        <hr className="w-96 mx-auto my-1" />
        <p>{props.content}</p>
        <div className="d-flex justify-content-end">
        <div className= "btn">
          {props.defaultNote ? (
            <DeleteIcon color="disabled" disabled={true} fontSize="small" />
          ) : (
            <DeleteIcon
              fontSize="small"
              id={props.id}
              onClick={() => {
                return props.onClick(props.id);
              }}
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewNotes;
