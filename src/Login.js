import '../src/styles/Login.css';
import LoginSideImage from '../src/assets/notePictures/images1.png';
import { Link } from 'react-router-dom';
const Login = () => {
  return ( 
    <div className="login-page">
      <div className="login-bg-image">
        <img className='login-image' src={LoginSideImage} alt='login-image'/>

      </div>
      <div className="login-welcome-div">
        <div className='welcome-div'>
          <h1>NOTE MANAGEMENT</h1>
          <h2>Login to your account </h2>
          </div>
        <div className='login-form-div'>
          <form >
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
            <button>Sign in</button>

            <p>Don't have an account? <Link to="/register">Register instead
            </Link>
            </p>
          </form>
        </div>
        </div>
    </div>
   );
}
 
export default Login;
