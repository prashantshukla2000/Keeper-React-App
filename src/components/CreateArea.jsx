import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded,setIsExpanded]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
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
  function expand() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
       { isExpanded && <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />}
        <textarea onClick={expand}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded?3 :1}
          value={note.content}
        />
         <Fab onClick={submitNote} color="primary" aria-label="add">
         <AddIcon /></Fab>
      </form>
    </div>
  );
}

export default CreateArea;
