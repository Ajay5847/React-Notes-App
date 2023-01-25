import React from 'react'
import {MdAddToPhotos} from 'react-icons/md'

function Addnote({noteText, handleNoteText, addNote}) {
  return (
    <div className='notes new-note'>
        <textarea value={noteText} onChange={(e) => handleNoteText(e.target.value)} cols="30" rows="10" maxLength={250} placeholder="Type your Note here....."></textarea>
        <div className="footer">
            <small className='date'>Remaining Words: {250 - noteText.length}</small>
            <button className='add-btn' onClick={addNote}><MdAddToPhotos /></button>
        </div>
    </div>
  )
}

export default Addnote