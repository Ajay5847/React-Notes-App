import "./App.css";
import NoteList from "./NoteList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./Search";
import Header from "./Header";

function App() {
  const [noteText, setNoteText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [notes, setNotes] = useState([]);

  function addNote() {
    if (noteText.trim().length > 0) {
      const date = new Date().toLocaleDateString();
      const newNote = {
        text: noteText,
        date: date,
        id: nanoid(),
      };
      const updatedNotes = [...notes, newNote];
      setNotes(updatedNotes);
      setNoteText("");
    } else {
      alert("Type Some Text to Add a Note....");
      setNoteText("");
    }
  }

  function handleNoteText(text) {
    setNoteText(text);
  }

  function handleDelete(id) {
    const updatedAfterDelete = notes.filter((note) => note.id !== id);
    setNotes(updatedAfterDelete);
  }

  function handleSearchText(search) {
    setSearchText(search);
  }

  return (
    <div className={darkMode && "dark-mode"}>
      <Header setDarkMode={setDarkMode} />
      <Search handleSearchText={handleSearchText} />
      <NoteList
        addNote={addNote}
        handleNoteText={handleNoteText}
        handleDelete={handleDelete}
        noteText={noteText}
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase())
        )}
      />
    </div>
  );
}

export default App;
