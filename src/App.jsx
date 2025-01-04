import 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from "./CreateArea.jsx";
import {useState} from "react";

function App() {
    const [notes, setNotes] = useState([]);

    function handleSubmit(item) {
        setNotes(prev => [...prev, item]);
    }

    function deleteNote(id) {
        setNotes(prev => prev.filter((item) => id !== item.id));
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={handleSubmit}/>
            {notes.map((note) => (
                <Note title={note.title} content={note.content} key={note.id} id={note.id} delete={deleteNote}/>))}
            <Footer/>
        </div>
    );
}

export default App
