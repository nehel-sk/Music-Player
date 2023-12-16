import React, { useState } from 'react'
import './Login.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {useNavigate} from 'react-router-dom'

function Login(){
    const[phone,setPhone]=useState("")
    const navigate=useNavigate()
    return(
        <div className='container'>
            <div className='box'>
                <h1>Sign In</h1>
                <form>
                    <p>Please enter your mobile number to login. We will send an OTP to verify your number.</p>
                    <PhoneInput inputStyle={{width:'407px',height:'59px',borderRadius:'8px'}} country={"in"} value={phone} onChange={setPhone}/>
                    <button onClick={()=>navigate("/verification")}>Sign In</button>
                </form>
            </div> 
            
        </div>  
    );
}
   
export default Login