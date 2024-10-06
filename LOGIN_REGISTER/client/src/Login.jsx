import React from 'react';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../src/LS_styles.css';
import axios from 'axios';
import HomePage from './HomePage';

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault()
       
        axios.post('https://gymbro-sigma.vercel.app/login', { email, password })
        .then(result => {
            console.log(result)
            if(result.data === "Success"){
                navigate('/homepage')
            }
        })
        .catch(err => console.log(err))
    }
    return (
        <div className="containerLS">
            <div className="login-form">
                <div className="logoLS">
                    <img src="LS_logo.png" alt="GymBro Logo" />
                </div>
                <h1>Log in to your Account</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">
                        Log in
                    </button>
                </form>
                <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
            </div>

            
            <div class="welcome-section">
                <img src="rightPanel.png" alt="background" class="background" />
                <div class="welcome-message">
                    <h3>Welcome back!</h3>
                    <img src="welcomeLogo.png" alt="GymBro Logo"/>
                    <p>Empower Your Fitness Journey</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
