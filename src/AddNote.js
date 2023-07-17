import "../src/styles/UpdateEntry.css";
import React, { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const AddNote = () => {
  const navigate = useNavigate();
  const addNoteApi = "http://localhost:8082/api/v1/entry";

  const data = {
    title: "",
    body: ""
  };

  const [addNoteData, setAddNoteData] = useState(data);

  const handleChange = (e) => {
    setAddNoteData({ ...addNoteData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addNoteData);

    axios.post(addNoteApi, addNoteData)
      .then((res) => {
        console.log(res);
        if(res.status === 201){
          toast.success("Entry added successfully!")
          setTimeout(() => {
            navigate("/home")
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error adding entry, check your connection and/or try again");
        }
      );
  };


  return(
  <div className="update-page">
  <h1>Add A Note Entry</h1>
  <div>
    <form onSubmit={handleSubmit}>
      <label>Entry Title:</label>
    <input
      type="text"
      name="title"
      onChange={handleChange}
      required
      placeholder="Create the entry title here"
    />
    <label>Entry Body:</label>
    <textarea
      name="body"
      onChange={handleChange}
      required
      placeholder="Create the entry body here"
    />
    <button type="submit">Add Note</button>
    </form>
  </div>
</div>
);
}
 
export default AddNote;