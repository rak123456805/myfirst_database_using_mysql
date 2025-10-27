import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (!token || !userData) {
      navigate('/login');
      return;
    }
    
    try {
      setUser(JSON.parse(userData));
    } catch (error) {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (!user) {
    return <div className="dashboard-loading">Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <h1>Dashboard</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </nav>
      
      <div className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome, {user.name}!</h2>
          <p>You have successfully logged into your account.</p>
        </div>
        
        <div className="dashboard-cards">
          <div className="dashboard-card">
            <h3>Profile Information</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>User ID:</strong> {user.id}</p>
          </div>
          
          <div className="dashboard-card">
            <h3>Account Status</h3>
            <p>Status: <span className="status-active">Active</span></p>
            <p>Member since: {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="dashboard-card">
            <h3>Quick Actions</h3>
            <button className="action-button">Edit Profile</button>
            <button className="action-button">Change Password</button>
            <button className="action-button">Privacy Settings</button>
          </div>
        </div>
        
        <div className="recent-activity">
          <h3>Recent Activity</h3>
          <ul>
            <li>✅ Successfully logged in</li>
            <li>🕒 Account created recently</li>
            <li>👋 Welcome to our platform!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;