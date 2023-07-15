import "../src/styles/UpdateEntry.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateEntry = () => {
  const { entryId } = useParams();
  const [entry, setEntry] = useState(null);
  // const [updatedEntry, setUpdatedEntry] = useState({ title: '', body: ''});

  // console.log(entryId);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/v1/view-entry/" + entryId)
      .then((res) => {
        console.log(res);
        setEntry(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // const fetchEntryData = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8082/api/v1/view-entry/'+{entryId});
  //     setEntry(response.data);
  //     console.log(response.data);
  //     //setUpdatedEntry(response.data);
  //   } catch (error) {
  //     console.error('Error fetching note data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchEntryData();
  // }, [entryId]);

  // const handleEntryChange = event => {
  //   const { name, value } = event.target;
  //   setUpdatedEntry(prev => ({ ...prev, [name]: value }));
  // };

  // const handleUpdateEntry = async () => {
  //   try {
  //     const response = await axios.put('http://localhost:8082/api/v1/update-entry/'+{entryId}, updatedEntry);

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
