import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../src/urgym_styles.css';
import AddGym from "./AddGymPage";
function HomePage() {
    const navigate = useNavigate()
    return (
        <div className="container">
            {/* logo */}
            <div className="logo">
                <img src="violet_logo.png" alt="GymBro_logo" />
            </div>
            
            {/* main layout */}
            <div className="layout">
                {/* sidebar */}
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

                {/* main content */}
                <div className="main-content-hp" id="mainContent">
                    {/* top part of the main content */}
                    <div className="top-part">
                        <h1>Your Gyms</h1>
                        <div className="search-bar">
                            <input type="text" placeholder="Search here" />
                            <button className="add-gym-btn" id="addGymBtn" onClick={() => navigate('/addgym')}>
                                <img src="AddIcon.png" alt="add-icon" /> 
                                Add Gym
                            </button>
                        </div>
                    </div>
                    
                    {/* example gyms and branches */}
                    <div className="gym-and-branches">
                        {/* example gyms */}
                        <div className="gym-box">
                            {/* top part of the gym */}
                            <div className="gyms-top-part">
                                <span className="gym-name">Anytime Fitness</span>
                                <button className="add-branch-btn"> 
                                    <img src="plusIcon-violet.png" alt="add-branch-icon" className="add-icon" /> 
                                    Add Branch
                                </button>
                                <a href="#">
                                    <img src="editIcon.png" alt="edit-icon" className="edit-icon" />
                                </a>
                            </div>
                            
                             {/* example branches */}
                            <div className="branch-list">
                                <div className="branch-item">
                                    <div className="gym-img">
                                        <img src="ayala_mall.png" alt="Gym Image" />
                                    </div>
                                    <div className="branch-details">
                                        <a href="records.html">
                                            <span className="branch-location">Ayala Malls, Legazpi</span>
                                        </a>
                                        <span className="branch-name">Anytime Fitness</span>
                                    </div>
                                    <div className="branch-actions">
                                        <div className="top-actions">
                                            <img src="insight-violet.png" alt="insight-icon" className="action-icon" />
                                            <img src="bookmark-violet.png" alt="bookmark-icon" className="action-icon" />
                                        </div>
                                        <button className="view-logs" onClick={() => window.location.href='records.html'}>
                                            View Logs
                                            <img src="arrow-right.png" alt="view-logs" />
                                        </button>
                                    </div>
                                </div>
                                {/* add example branches here */}
                                <div className="branch-item">
                                    <div className="gym-img">
                                        <img src="diversion.png" alt="Gym Image" />
                                    </div>
                                    <div className="branch-details">
                                        <span className="branch-location">Diversion M Plaza, Naga</span>
                                        <span className="branch-name">Anytime Fitness</span>
                                    </div>
                                    <div className="branch-actions">
                                        <div className="top-actions">
                                            <img src="insight-violet.png" alt="insight-icon" className="action-icon" />
                                            <img src="bookmark-violet-filled.png" alt="bookmark-icon" className="action-icon" />
                                        </div>
                                        <button className="view-logs">
                                            View Logs
                                            <img src="arrow-right.png" alt="view-logs" />
                                        </button>
                                    </div>
                                </div>
                            </div>                                               
                        </div>
                        
                        {/* add example gym here */}
                        <div className="gym-box">
                            {/* top part of the gym */}
                            <div className="gyms-top-part">
                                <span className="gym-name">A-Factor</span>
                                <button className="add-branch-btn"> 
                                    <img src="plusIcon-violet.png" alt="add-branch-icon" className="add-icon" /> 
                                    Add Branch
                                </button>
                                <a href="#">
                                    <img src="editIcon.png" alt="edit-icon" className="edit-icon" />
                                </a>
                            </div>
                            
                             {/* example branches */}
                            <div className="branch-list">
                                <div className="branch-item">
                                    <div className="gym-img">
                                        <img src="jacob.png" alt="Gym Image" />
                                    </div>
                                    <div className="branch-details">
                                        <span className="branch-location">Jacob, Naga</span>
                                        <span className="branch-name">A-Factor</span>
                                    </div>
                                    <div className="branch-actions">
                                        <div className="top-actions">
                                            <img src="insight-violet.png" alt="insight-icon" className="action-icon" />
                                            <img src="bookmark-violet.png" alt="bookmark-icon" className="action-icon" />
                                        </div>
                                        <button className="view-logs">
                                            View Logs
                                            <img src="arrow-right.png" alt="view-logs" />
                                        </button>
                                    </div>
                                </div>
                                {/* add example branches here */}
                            </div>                                               
                        </div>
                    </div> 
                </div> 
            </div>
        </div>
    );
}

export default HomePage;