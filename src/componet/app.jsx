import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App(){

    const [noteBook, setNoteBook] = useState([]);

    function addToNotebook(notes){
        setNoteBook(preval => {
            return [...preval, notes]});
            event.preventDefault();
    }

    function toDelete(id){
        setNoteBook((preval) => {
           return preval.filter((page, index) => {
                return index !== id;
            });
        });
    }

    

    return(
    <div>
        <Header /> 
        <CreateArea addTo={addToNotebook} />
        {noteBook.map((pages, index) => (            
            <Note
            key={index}
            id={index}
            title={pages.title} 
            content={pages.content}
            click={toDelete}               
            />
        ))}       
        
        <Footer />
    </div>);
}

export default App;