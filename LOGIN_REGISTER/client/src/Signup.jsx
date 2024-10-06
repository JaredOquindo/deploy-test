import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../src/LS_styles.css';
import Login from './Login';

function Signup() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default form submission behavior
        
        // Check if password and confirmPassword are the same
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return; // Prevents submission if passwords do not match
        } else {
            setErrorMessage('');
            axios.post('https://gymbro-sigma.vercel.app/signup', {firstName, lastName, email, password})
            .then(result => {console.log(result)
                navigate('/login')
            })
            .catch(err => console.error('AxiosError', err.response?.data || err.message));
        }
    };

    return (
        <div className="containerLS">
            <div className="login-form">
                <div className="logoLS">
                    <img src="LS_logo.png" alt="GymBro Logo" />
                </div>
                <h2>Welcome to GymBro!</h2>
                <h5>Register your account</h5>
                
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="firstname" 
                        placeholder="First Name" 
                        required 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        name="lastname" 
                        placeholder="Last Name" 
                        required 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type="password" 
                        name="confirmation" 
                        placeholder="Confirm Password" 
                        required 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit">Create Account</button>
                </form>
                <p>Already have an account? <Link to="/login">Log In</Link></p>
            </div>

            <div className="welcome-section">
                <img src="rightPanel.png" alt="background" className="background" />
                <div className="welcome-message">
                    <h3>Welcome back!</h3>
                    <img src="welcomeLogo.png" alt="GymBro Logo" />
                    <p>Empower Your Fitness Journey</p>
                </div>
            </div>

        </div>
        
    );
}

export default Signup;
