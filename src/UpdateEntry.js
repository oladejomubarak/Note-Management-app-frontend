import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateEntry = () => {

  const { noteId } = useParams();
  const [note, setNote] = useState('');
  const [updatedNote, setUpdatedNote] = useState('');

  useEffect(() => {
    fetchNoteData();
  }, [noteId]);

  const fetchNoteData = async () => {
    try {
      const response = await axios.get(`backend/api/notes/${noteId}`);
      setNote(response.data.content);
      setUpdatedNote(response.data.content);
    } catch (error) {
      console.error('Error fetching note data:', error);
    }
  };

  const handleNoteChange = event => {
    setUpdatedNote(event.target.value);
  };

  const handleUpdateNote = async () => {
    try {
      const response = await axios.put(`backend/api/notes/${noteId}`, { content: updatedNote });
      
      if (response.status === 200) {
        console.log('Note updated successfully');
        // Perform additional actions if needed
      } else {
        throw new Error('Failed to update note');
      }
    } catch (error) {
      console.error('Error updating note:', error);
      // Handle the error appropriately (e.g., show an error message)
    }
  };

  return (
    <div>
      <textarea value={updatedNote} onChange={handleNoteChange} />
      <button onClick={handleUpdateNote}>Update Note</button>
    </div>
  );

}
 
export default UpdateEntry;