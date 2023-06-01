import '../src/styles/Login.css';
import LoginSideImage from '../src/assets/notePictures/images.png';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const VerifyToken = () => {
  const navigate = useNavigate();

  const confirmTokenApi = "http://localhost:8082/api/v1/confirm-token";

  const data = {
    token : "",
    email : ""
  }

  const [confirmTokenData, setConfirmTokenData] = useState(data);

  const handleChange = (e) =>{
    setConfirmTokenData({...confirmTokenData, [e.target.name]: e.target.value });
  };

const handleVerifyClick = () =>{
   <Link to='/home'></Link>
};

  return (
    <div className="login-page">

<div className="login-bg-image">
        <img className='login-image' src={LoginSideImage} alt='login-image'/>

      </div>
      <div className="login-welcome-div">
        <div className='welcome-div'>
        
          <h2>Token Verification </h2>
          </div>
        <div className='login-form-div'>
          <form >
            <p>Enter the 4 digits token recieved in the space below</p>
            <label>Token:</label>
            <input
            type="text"
            name='token'
            onChange={handleChange}
            // size={4}
             required
            />
            <label>Email:</label>
            <input
            type="text"
            name='email'
            onChange={handleChange}
            required 
            />
            <button onClick={handleVerifyClick}>verify</button>
            <button>resend token </button>
          </form>
        </div>
        </div>

    </div>
   );
}
 
export default VerifyToken;