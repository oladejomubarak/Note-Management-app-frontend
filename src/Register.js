import '../src/styles/Register.css';
import LoginSideImage from '../src/assets/notePictures/images6.png';
import { Link } from 'react-router-dom';

const Register = () => {
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
          type="text"
          required
          />
          <label>Last Name:</label>
          <input
          type="text"
          required
          />
          <label>E-mail Address:</label>
          <input
          type="text"
          required
          />
          <label>Password:</label>
          <input
          type="text"
          required
          />
          <label>Confirm Password:</label>
          <input
          type="text"
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