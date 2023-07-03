import axios from "axios";
import { useEffect, useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/HomeContent.css';


const HomeContent = () => {
  const [entries, setEntries] = useState(null);
  const [noData, setNoData] = useState({});
  useEffect(()=>{
    setTimeout(()=>{
      axios.get("http://localhost:8082/api/v1/entries")
    .then(res => {
      if(res.status === 200){
        setEntries(res.data)
      }
      if(res.data.length === 0){
        setNoData(null)
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
        <div>
          <h3>{entry.dateCreated}</h3>
        <h4>{entry.timeCreated}</h4>
        </div>
      </div>
    )
    )) : (
      <p>Loading...</p>
    )}
    {noData && <h5>There is nothing in the list</h5>}

  </div>
  </>);
}
export default HomeContent;