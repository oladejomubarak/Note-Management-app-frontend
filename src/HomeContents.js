import axios from "axios";
import { useEffect, useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/HomeContent.css';


const HomeContent = () => {
  const [entries, setEntries] = useState(null);
  useEffect(()=>{
    setTimeout(()=>{
      axios.get("http://localhost:8082/api/v1/entries")
    .then(res => {
      if(res.status === 200){
        setEntries(res.data)
      }
    }).catch(err =>{
  toast.error("Can't fetch data");
    })

    }, 1000)
    
  }, []);

  return (  <>
  <div className="entries">
    {entries ? (entries.map((entry) => (
      <div className="entry-preview" key={entry.id}>
        <h2>{entry.title}</h2>
        <p>{entry.body}</p>
        <h3>{entry.dateCreated}</h3>
      </div>
    )
    )) : (
      <p>Loading...</p>
    )}

  </div>
  </>);
}
export default HomeContent;