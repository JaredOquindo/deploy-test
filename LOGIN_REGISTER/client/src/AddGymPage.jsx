import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/addgym.css';

function AddGym() {
    const [gymName, setGymName] = useState('');
    const [branchLocation, setBranchLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the logic for adding a new gym here, e.g., API call
        console.log({ gymName, branchLocation, imageUrl });
        // Reset fields after submission if needed
        setGymName('');
        setBranchLocation('');
        setImageUrl('');
    };

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const handleCancel = () => {
        // Reset fields and perform any additional cancel logic if needed
        setGymName('');
        setBranchLocation('');
        setImageUrl('');
    };

    return (
        <div className="container">
            <div className="logo">
                <img src="violet_logo.png" alt="GymBro Logo" />
            </div>

            {/* Sidebar */}
            <div className="content-wrapper">
                <nav className="SideBar">         
                    <ul className="navlinks">
                        <li>
                            <a href="urgym.html">
                                <img src="urgym.png" alt="Your Gyms" className="nav-icon" />
                                Your Gyms
                            </a>
                        </li>
                        <li>
                            <a href="../bookmarks/bookmarks.html">
                                <img src="bookmark.png" alt="Bookmarks" className="nav-icon" />
                                Bookmarks
                            </a>
                        </li>
                        <li>
                            <a href="../insights/insights.html">
                                <img src="insight.png" alt="Insights" className="nav-icon" />
                                Insights
                            </a>
                        </li>
                        <li>
                            <a href="../customers/customers-page.html">
                                <img src="customers.png" alt="Customers" className="nav-icon" />
                                Customers
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="logout.png" alt="Logout" className="nav-icon" />
                                Logout
                            </a>
                        </li>
                    </ul>            

                    <div className="userinfo">
                        <a href="profile.html" className="userAcc">
                            <img src="useravatar.png" alt="User Profile" className="user-avatar" />
                            <span>Juan Dela Cruz</span>
                        </a>
                    </div>
                </nav>

                {/* Form for adding gym */}
                <div className="main-content">
                    <button id="goBackButton" onClick={handleBack}>
                        <img src="arrow-left.png" alt="Back Icon" className="button-icon" />
                        Back
                    </button>
                    <h1>Add New Gym</h1>
                    <form className="newGym-form" onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="gymname" 
                            placeholder="Gym Name" 
                            value={gymName} 
                            onChange={(e) => setGymName(e.target.value)} 
                            required 
                        />
                        <input 
                            type="text" 
                            name="branchlocation" 
                            placeholder="Branch Location" 
                            value={branchLocation} 
                            onChange={(e) => setBranchLocation(e.target.value)} 
                            required 
                        />
                        <input 
                            type="text" 
                            name="imageurl" 
                            placeholder="Image URL" 
                            value={imageUrl} 
                            onChange={(e) => setImageUrl(e.target.value)} 
                            required 
                        />

                        <div className="button-container">
                            <button type="submit">
                                <img src="plusIcon-white.png" alt="Plus Icon" />
                                Create
                            </button>
                            <button type="button" id="cancelButton" onClick={handleCancel}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddGym;