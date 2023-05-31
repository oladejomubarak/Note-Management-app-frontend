import { useState } from "react";
import '../src/styles/Register.css';
import LoginSideImage from '../src/assets/notePictures/images6.png';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const Register = () => {
const registerApi = "http://localhost:8082/api/v1/register";

const data = {

}

const [ registerData, setRegisterData ] = useState()

const handleChange = (e) => {
  setRegisterData([...registerData,
                  {[e.target.name] : e.target.value}
  ])
}

const handleSubmit = (e) => {}
  e.preventDefault();
  Axios.post(registerApi, registerData)
  .then(res => {
    console.log(res)
  }).catch(err => {
    console.log(err);
  })
}




  return ( 
    <div className="register-page">
    <div className="register-bg-image">
      <img className='register-image' src={LoginSideImage} alt='register-image'/>

    </div>
    <div className="register-welcome-div">
      <div className='welcome-div'>
        <h1>NOTE MANAGEMENT</h1>
        <h2>Create an account</h2>
        </div>
      <div className='register-form-div'>
        <form >
          <label>First Name:</label>
          <input
          namme="firstname"
          type="text"
          required
          />
          <label>Last Name:</label>
          <input
          namme="lastname"
          type="text"
          required
          />
          <label>E-mail Address:</label>
          <input
          namme="emailAddress"
          type="text"
          required
          />
          <label>Password:</label>
          <input
          namme="password"
          type="text"
          required
          />
          <label>Confirm Password:</label>
          <input
          type="text"
          namme="password"
          required
          />
          <button>Sign up</button>

          <p>Already have an account? <Link to="/">Log in instead
          </Link>
          </p>
        </form>
      </div>
      </div>
  </div>

   );
}
 
export default Register;