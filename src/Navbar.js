import {Link} from 'react-router-dom';
import './styles/Navbar.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Navbar = () =>{
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();
  const handleSearchOneSubmit = () =>{

  }
  const handleSearchOneChange = () =>{

  }
  const handleSearchTwoSubmit = () =>{

  }
  const handleSearchTwoChange = () =>{

  }
  const handleSearchThreeSubmit = () =>{

  }
  const handleSearchThreeChange = (date) =>{
    setSelectedDate(date);

  }
  return(
    <nav className='navbar'>
      <h1>My Notes</h1>
      <div className='search'>
        <div className='search1'>
          <form onSubmit={handleSearchOneSubmit}>
            <input 
            type='text'
            name='keyword'
            placeholder='Search note by keyword'
            onChange={handleSearchOneChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className='search2'>
        <form onSubmit={handleSearchTwoSubmit}>
            <input 
            type='text'
            name='keyword'
            placeholder='Search note by title'
            onChange={handleSearchTwoChange}
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className='search3'>
        <form onSubmit={handleSearchThreeSubmit}>
            <DatePicker
            selected={selectedDate}
            onChange={handleSearchThreeChange}
            dateFormat="yyyy-MM-dd"
            placeholderText="Search note by date"
            maxDate={today}
          />
          <button type="submit">Search</button>
          </form>
          
        </div>
      </div>
    <div className="links">
      <Link to='/add-note'>Add note</Link>
      <Link to='/'>Logout</Link>
    </div>
    </nav>
    
  );
}
export default Navbar;