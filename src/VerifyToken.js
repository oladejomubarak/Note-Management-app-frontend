
import'../src/styles/VerifyToken.css';
import LoginSideImage from '../src/assets/notePictures/images6.png';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyToken = () => {
  const navigate = useNavigate();

  const confirmTokenApi = "http://localhost:8082/api/v1/confirm-token";

  const data = {
    token : "",
    email : ""
  }

  const [confirmTokenData, setConfirmTokenData] = useState(data);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>{
    setConfirmTokenData({...confirmTokenData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(confirmTokenData);
    axios.patch(confirmTokenApi, confirmTokenData)
    .then((res)=>{
      console.log(res);
      res.status === 200 && navigate('/home');
    }).catch((err)=>{
      console.log(err);
      if(err.response && err.response.data.message){
      setErrorMessage(err.response.data.message);
      } else{
        setErrorMessage("Something went wrong!")  
      }
      errorMessage &&  toast.error(errorMessage);
      });
  };
const handleResendToken = (e) => {
  e.preventDefault();
  navigate("/resend-token");
}
  return (
    <div className="login-page">

    <div className="login-bg-image">
        <img className='login-image' src={LoginSideImage} alt='note'/>

      </div>
      <div className="login-welcome-div">
        <div className='welcome-div'>
        
          <h2>Token Verification </h2>
          </div>
        <div className='login-form-div'>
          <form onSubmit={handleSubmit}>
            <p>Enter the 4 digits token recieved and your email in the space below</p>
            <label>Token:</label>
            <input className='token'
            type="number"
            pattern='\d*'
            name='token'
            onChange={handleChange}
            // size={4}
             required
             maxLength="4"
            />
            <label>Email:</label>
            <input className='email'
            type="text"
            name='email'
            onChange={handleChange}
            required 
            />
            <button type='submit'>verify</button>
          </form>
          <button className='resend-token' onClick={handleResendToken}>resend token </button>
        </div>
        </div>

    </div>
   );
}
 
export default VerifyToken;