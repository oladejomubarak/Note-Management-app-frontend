import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewEntry = ({ id }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const findById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8082/api/v1/view-entry${id}`);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    findById(id);
  }, [id]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          {/* Render other data fields as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ViewEntry;
