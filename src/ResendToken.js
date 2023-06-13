import { useNavigate } from "react-router-dom";

const ResendToken = () => {
  const resendTokenApi = "http://localhost:8082/api/v1/resend-token";
  const navigate = useNavigate();
  const data = {
    email:""
  }  
  return ( <></> );
}
 
export default ResendToken 