import '../src/styles/Login.css';
import LoginSideImage from '../src/assets/notePictures/images.png';
import { Link } from 'react-router-dom';
const VerifyToken = () => {

const handleVerifyClick = () =>{
   <Link to='/home'></Link>
}

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
            // size={4}
            // required
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