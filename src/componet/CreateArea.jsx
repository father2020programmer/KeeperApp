import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  
    const [animations, setAnimations] = useState(false)
    const [notes, setNotes] = useState({
        title: "",
        content: ""
    });
    

    function handleChange(event){
        const {value, name} = event.target;
        setNotes((preval) => {
            return {...preval, [name]: value}            
        })
    }

    function handleAnimation(){
      setAnimations(true);
    }
    
  return (
    <div>
      <form className="create-note">
        {animations && (
        <input 
        onChange={handleChange} 
        name="title" 
        placeholder="Title" 
        value={notes.title}           
        />)}
        <textarea 
        onChange={handleChange}
        onClick={handleAnimation} 
        name="content" 
        placeholder="Take a note..." 
        rows={animations ? "3" : "1"} 
        value={notes.content} />
        <Zoom in={animations}>
          <Fab onClick={() => {
            props.addTo(notes);
            setNotes({ title:"", content:""});
          }} ><AddIcon /></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;