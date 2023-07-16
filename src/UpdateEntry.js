import "../src/styles/UpdateEntry.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateEntry = () => {
  // const { id } = useParams();
  // const [entry, setEntry] = useState(null);
  // const [updatedEntry, setUpdatedEntry] = useState({ title: '', body: ''});

  // console.log(entryId);

  // useEffect(() => {
  //   axios.get("http://localhost:8082/api/v1/view-entry/"+id).then((res) => {
  //       console.log(res);
  //       setEntry(res.data);
  //     }).catch((err) => console.log(err));
  // }, [id]);
  // const fetchEntryData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8082/api/v1/view-entry/'+id);
  //     setEntry(response.data);
  //     console.log(response.data);
  //     //setUpdatedEntry(response.data);
  //   } catch (error) {
  //     console.error('Error fetching note data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEntryData();
  // }, [id]);

  // const handleEntryChange = event => {
  
  //   const { name, value } = event.target;
  //   setUpdatedEntry(prev => ({ ...prev, [name]: value }));
  // };

  // const handleUpdateEntry = async () => {
  //   try {
  //     const response = await axios.put('http://localhost:8082/api/v1/update-entry/'+id, updatedEntry);

  //     if (response.status === 200) {
  //       console.log('Note updated successfully');
  //       // Perform additional actions if needed
  //     } else {
  //       throw new Error('Failed to update note');
  //     }
  //   } catch (error) {
  //     alert("error updating note", error.name);
  //     // Handle the error appropriately (e.g., show an error message)
  //   }
  // };

  const { id } = useParams();
  const [entry, setEntry] = useState(null);
  const [error, setError] = useState("");
  const [isPending, setPending] = useState(true);

  const findById = async (id) => {
    try {
      const response = await axios.get('http://localhost:8082/api/v1/view-entry/' + id);
      setEntry(response.data);
      setPending(false);
    } catch (error) {
      setError("Error fetching entry details");
      setPending(false);
    }
  };
  useEffect(() => {
    setTimeout(()=>{
      findById(id);
    }, 1000);
   
  }, [id]);
  {error && toast.error(error)}



  return (
    <div className="update-page">
      <h1>Update Entry</h1>
      <div>
        <form onSubmit={<></>}>
          <label>Entry Title:</label>
        <input
          type="text"
          name="title"
          value={entry.title}
          // onChange={handleEntryChange}
          // placeholder="Title"
        />
        <label>Entry Body:</label>
        <textarea
          name="body"
          value={entry.body}
          // onChange={handleEntryChange}
          // placeholder="Note Body"
        />
        <button type="submit">Update Note</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEntry;
