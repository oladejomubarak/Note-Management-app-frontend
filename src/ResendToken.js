import Axios from "axios";
import LoginSideImage from "../src/assets/notePictures/images6.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResendToken = () => {
  const resendTokenApi = "http://localhost:8082/api/v1/resend-token";
  const navigate = useNavigate();
  const data = {
    email:""
  } 

  const [resendTokenData, setResendTokenData] = useState(data);

  const handleChange = (e) => {
    setResendTokenData({...resendTokenData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resendTokenData);
    Axios.post(resendTokenApi, resendTokenData)
    .then((result) => {
      console.log(result);
      result.status === 200 && navigate("/verify-token");
    }).catch((err) => {
      alert(err.toJSON().message);
    });
  };
  return ( 
  <div className="login-page">

    <div className="login-bg-image">
        <img className='login-image' src={LoginSideImage} alt='login-image'/>

      </div>
      <div className="login-welcome-div">
        <div className='welcome-div'>
        
          <h2>Verification Email </h2>
          </div>
        <div className='login-form-div'>
          <form onSubmit={handleSubmit}>
            <p>Enter the email you used to register in the space below</p>
            <label>Email:</label>
            <input className='email'
            type="text"
            name='email'
            onChange={handleChange}
            required 
            />
            <button type='submit'>Send</button>
          </form>
        </div>
        </div>

    </div>
  );
}
 
export default ResendToken 