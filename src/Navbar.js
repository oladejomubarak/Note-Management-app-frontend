import {Link} from 'react-router-dom';
import './styles/Navbar.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Navbar = () =>{
  const [selectedDate, setSelectedDate] = useState(null);




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
  const handleSearchThreeChange = () =>{

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
            placeholder='keyword'
            onChange={handleSearchOneChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className='search2'>
        <form onSubmit={handleSearchTwoSubmit}>
            <input 
            type='text'
            name='keyword'
            placeholder='title'
            onChange={handleSearchTwoChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className='search3'>
        <form onSubmit={handleSearchThreeSubmit}>
        <div>
            <DatePicker
            selected={selectedDate}
            onChange={handleSearchThreeChange}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select a date"
          />
          </div>
          <button type="submit">Submit</button>
          </form>
          
        </div>
      </div>
    <div className="links">
      <Link to='/home'>Home</Link>
      <Link to='/create'>Add note</Link>
    </div>
    </nav>

  );
}
export default Navbar;