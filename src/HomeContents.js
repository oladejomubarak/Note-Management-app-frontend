import axios from "axios";
import { useEffect, useState } from "react";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/HomeContent.css';
import {Link} from 'react-router-dom';


const HomeContent = () => {
  const [entries, setEntries] = useState(null);
  const [noData, setNoData] = useState(true);
  const [isPending, setPending] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      axios.get("http://localhost:8082/api/v1/entries")
    .then(res => {
      if(res.status === 200){
        setEntries(res.data)
        setPending(false);
        setNoData(false);
      }
      if(res.status === 200 && res.data.length === 0){
        setNoData(true);
        setPending(false)
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
        {/* <p>{entry.body}</p> */}
        <div className="date-time">
          <h3>created on {entry.dateCreated}</h3>
        <h4>at {entry.timeCreated}</h4>
        </div>
        <div className="entry-operations">
          <p className="view" onClick={()=>{alert("view note")}}>view</p>
          <p className="edit">edit</p>
          <p className="delete">delete</p>
        </div>

      </div>
    )
    )) : (
      <p>Loading...</p>
    )}
    {!isPending && noData && <h5 className="empty-list-message">The list is empty, <Link to="/add-note">Click to add note</Link></h5>}

  </div>
  </>);
}
export default HomeContent;