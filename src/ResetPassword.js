import'../src/styles/VerifyToken.css';
import LoginSideImage from '../src/assets/notePictures/images6.png';
import {Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
  const navigate = useNavigate();

  const resetPasswordApi = "http://localhost:8082/api/v1/reset-password";

  const data = {
    token : "",
    email : "",
    password: ""
  }

  const [resetPasswordData, setResetPasswordData] = useState(data);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>{
    setResetPasswordData({...resetPasswordData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(resetPasswordData);
    axios.patch(resetPasswordApi, resetPasswordData)
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

  return ( 
     <>
 <div className="login-page">

<div className="login-bg-image">
    <img className='login-image' src={LoginSideImage} alt='note'/>

  </div>
  <div className="login-welcome-div">
    <div className='welcome-div'>
    
      <h2>Reset Password</h2>
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
         <label>Password:</label>
        <input className='reset-password'
        type="password"
        name='newPassword'
        onChange={handleChange}
        required 
        />
         <label>Confirm Password:</label>
        <input className='repeat-reset-password'
        type="password"
        name='confirmNewPassword'
        onChange={handleChange}
        required 
        />
        <button type='submit'>verify</button>
        <p>Time-out? <Link to="/forgot-password">Resend token</Link></p>
      </form>
    </div>
    </div>
</div>

  </>);
}
export default ResetPassword;