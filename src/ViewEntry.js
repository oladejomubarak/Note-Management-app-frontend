import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/ViewEntry.css';

const ViewEntry = () => {
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
    <div className='view-entry-page'>
    <div className='entry-details'>
      {entry ? (
        <article className='article'>
          <h1>{entry.title}</h1>
          <div>{entry.body}</div>
        <div className='dateAndTime'>
          <h2>Date: {entry.dateCreated}</h2>
          <h2>Time: {entry.timeCreated}</h2>
        </div>
          </article>
      ) : (
         isPending && !error && <p>Loading...</p>
      )}
    </div>
    </div>
  );
};

export default ViewEntry;
