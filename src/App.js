
import { Routes, Route} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import VerifyToken from './VerifyToken';
import Home from './Home';
import ResendToken from './ResendToken';

function App() {

  return (
    <>
    <Routes>
        <Route exact path = {"/"} element ={<Login/>}/>
        < Route path = {"/register"} element ={<Register/>}/>
    
        <Route path = {"/verify-token"} element ={<VerifyToken/>} />
      
        <Route path= {"/home"} element = {<Home/>}/>

        <Route path= {"/resend-token"} element = {<ResendToken/>}/>

        </Routes>
    </>    
  );
}

export default App;
