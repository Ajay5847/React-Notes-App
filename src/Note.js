import React from 'react'
import {BsTrashFill} from'react-icons/bs'

function Note({note,handleDelete}) {
    // console.log(note.id);
  return (
    <div className='notes'>
        <span>{note.text}</span>
        <div className="footer">
            <small className='date'>{note.date}</small>
            <button className='delete-btn' onClick={() => handleDelete(note.id)}><BsTrashFill /></button>
        </div>
    </div>
  )
}

export default Note