import {Link} from 'react-router-dom';
import './styles/ViewEntryNavbar.css';
import NavPic from '../src/assets/notePictures/images.jpg';
const ViewEntryNavbar = () => {
  return (  
    <nav className='navbar'>
    <h1>My Notes</h1>
    <div className='search1'>
      <img className='image' src={NavPic}/>
    </div>
  <div className="links">
    <Link className='add-note' to='/add-note'>Add note</Link>
    <Link className='logout' to='/home'>Back to note list</Link>
  </div>
  </nav>
  );
}
 
export default ViewEntryNavbar;