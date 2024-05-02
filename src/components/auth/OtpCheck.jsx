import {useLocation, useNavigate} from "react-router-dom";
import * as React from "react";
import OTP from "./OTP.jsx";

export default function OtpCheck() {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [errorMessage, setErrorMessage] = React.useState("");
    console.log('param', location.state);
    
    function checkOtp() {
        var otp = document.getElementById('otpInput').value;    
        // const dataToSend = {
        //     otp: otp,
        //     email: location.state?.email
        // };
    
        checkOtp({otp, email: location.state?.email})
        .then(response => {
            navigate('/newPassword', { state: { email: location.state?.email } })
        })
        .catch(error => {
            setErrorMessage(error.response.data.message);
        });
        console.log(dataToSend);
    }

    return (
        <OTP checkOtp={checkOtp} errorMessage={errorMessage}></OTP>
    )
}