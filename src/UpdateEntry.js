import '../src/styles/UpdateEntry.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateEntry = () => {

  const { noteId } = useParams();
  const [note, setNote] = useState({ title: '', body: ''});
  const [updatedNote, setUpdatedNote] = useState({ title: '', body: ''});

  useEffect(() => {
    fetchNoteData();
  }, [noteId]);

  const fetchNoteData = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/v1/view-entry/' + noteId);
      setNote(response.data);
      //setUpdatedNote(response.data);
    } catch (error) {
      console.error('Error fetching note data:', error);
    }
  };

  const handleNoteChange = event => {
    const { name, value } = event.target;
    setUpdatedNote(prevNote => ({ ...prevNote, [name]: value }));
  };

  const handleUpdateNote = async () => {
    try {
      const response = await axios.put('http://localhost:8082/api/v1/update-entry/' + noteId, updatedNote);
      
      if (response.status === 200) {
        console.log('Note updated successfully');
        setUpdatedNote(note);
        
      } else {
        throw new Error('Failed to update note');
      }
    } catch (error) {
      console.error('Error updating note:', error);
      
    }
  };

  return (
    <div className='parent-div'>
      <nav className='nav'></nav>
      {note && 
      <div>
      <form onSubmit={handleUpdateNote}>
      <input
        type="text"
        name="title"
        value={updatedNote.title}
        contentEditable
        onChange={handleNoteChange}
        placeholder="Title"
      />
      <textarea
        name="body"
        type='text'
        value={updatedNote.body}
        contentEditable
        onChange={handleNoteChange}
        placeholder="Note Body"
      />
      <button type='sumbit'>Update Entry</button>
      </form>
      </div>
      }
    </div>
  );
}
 
export default UpdateEntry;