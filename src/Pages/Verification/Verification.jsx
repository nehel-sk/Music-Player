import React, { useState } from 'react'
import './Verification.css'
import {useNavigate} from 'react-router-dom'
import OTPInput, { ResendOTP } from "otp-input-react"

function Verification(){
    
    const navigate=useNavigate()
    const [OTP, setOTP] = useState("");
    return(
        <div className='container'>
            <div className='box'>
                <h1>OTP Verification</h1>
                <form>
                    <p>We have sent an OTP to your number. Please enter the code recieved to verify.</p>
                    <>
                        <OTPInput length={4} otpType="number" disabled={false} autofocus className="otp-container" maxTime="false"/>
                    </>
                    <button onClick={()=>navigate("/songs")}>Verify</button>
                    <a className="hyp" href="/verification">Resend OTP</a>
                    <a className="hyp" href="/">Try Another Number</a>

                </form>
            </div> 
            
        </div>  
    );
}
 export default Verification 