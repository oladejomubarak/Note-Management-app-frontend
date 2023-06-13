import { Axios } from "axios";
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
      console.log(err);
    });
  }
  return ( <></> );
}
 
export default ResendToken 