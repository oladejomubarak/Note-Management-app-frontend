
import { Routes, Route} from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import VerifyToken from './VerifyToken';
import Home from './Home';
import ResendToken from './ResendToken';
import {Slide,ToastContainer, toast} from 'react-toastify';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import AddNote from './AddNote';
import ViewEntryById from './ViewEntryById';

function App() {

  return (
    <>
    <Routes>
        <Route exact path = {"/"} element ={<Login/>} />
        < Route path = {"/register"} element ={<Register/>} />
    
        <Route path = {"/verify-token"} element ={<VerifyToken/>} />
      
        <Route path= {"/home"} element = {<Home/>} />

        <Route path= {"/resend-token"} element = {<ResendToken/>} />
        <Route path= {"/forgot-password"} element = {<ForgotPassword/>} />
        <Route path= {"/reset-password"} element = {<ResetPassword/>} />
        <Route path= {"/add-note"} element = {<AddNote/>} />
        <Route path= {"/view-entry/:id"} element = {<ViewEntryById/>} />
        </Routes>
        <ToastContainer transition={Slide}hideProgressBar={true} position={toast.POSITION.TOP_CENTER} theme='colored'/>
    </>    
  );
}

export default App;
