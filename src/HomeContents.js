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
  const [errorMessage, setErrorMessage] = useState("");

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
        setPending(false);
        
      }
    }).catch(err =>{
      setErrorMessage("Can't fetch data");
      setPending(false);
      setNoData(false);
      
    })
    
    }, 1000)
   
  }, []);
  errorMessage && toast.error(errorMessage);
  return (  <>
  <div className="entries">
    {entries ? (entries.map((entry) => (
      <div className="entry-preview" key={entry.id}>
        <h2>{entry.title}</h2>
        <div className="date-time">
          <h3>created on {entry.dateCreated}</h3>
        <h4>at {entry.timeCreated}</h4>
        </div>
        <div className="entry-operations">
        <Link to={`/view-entry/${entry.id}`}><p className="view">view</p></Link>
          
         <Link to={`/update-entry/${entry.id}`}><p className="edit">edit</p></Link>
          <p className="delete">delete</p>
        </div>

      </div>
    )
    )) : (

      !errorMessage && <p>Loading...</p>
    )}
    {!isPending && noData && <h5 className="empty-list-message">The list is empty, <Link to="/add-note">Click to add note</Link></h5>}

  </div>
  </>);
}
export default HomeContent;