import React from 'react'
import Note from './Note'
import Addnote from './Addnote'

function NoteList({notes, noteText, addNote, handleNoteText, handleDelete}) {
  return (
    <div className='notes-container'>
        <Addnote addNote={addNote} handleNoteText={handleNoteText} noteText={noteText}/>
        {notes.map((note) => <Note handleDelete={handleDelete} key={note.id} note={note}/>)}
    </div>
  )
}

export default NoteList