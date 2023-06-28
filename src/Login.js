import '../src/styles/Login.css';
import LoginSideImage from '../src/assets/notePictures/images1.png';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  useEffect(()=>{
    toast.info("Welcome back!", {theme:'light'})
  }, []);

  const navigate = useNavigate();
  const loginApi = "http://localhost:8082/api/v1/login";
  const data = {
    email : "",
    password : ""
  }

  const [loginData, setLoginData] = useState(data);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) =>{
    setLoginData({...loginData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(loginData);
    axios.get(loginApi, loginData)
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
          <h1>NOTE MANAGEMENT</h1>
          <h2>Login to your account </h2>
          </div>
        <div className='login-form-div'>
          <form onSubmit={handleSubmit}>
            <label>E-mail Address:</label>
            <input
            type="text"
            required
            onChange={handleChange}
            />
            <label>Password:</label>
            <input
            type="text"
            onChange={handleChange}
            required
            />
            <button>Sign in</button>
            <p><Link to="forgot-password">Forgot password ?</Link></p>

            <p>Don't have an account? <Link to="/register">Register instead
            </Link>
            </p>
            <p>Have an account, but not verified? <Link to="/resend-token">Request for verification token
            </Link>
            </p>
          </form>
        </div>
        </div>
    </div>
    </>
   );
}
 
export default Login;
