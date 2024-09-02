import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './Settings.css'



const Settings = () => {
    // State hooks to manage form input
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Handlers for form submission
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);
    const handleConfirmPasswordChange = (e) => setConfirmPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        alert("Settings updated!");
    };

    return (
        <div className="settings">
            <Navbar />
            <main className="settings-content">
                <h1>Settings</h1>
                <form onSubmit={handleSubmit}>
                    <section className="settings-section">
                        <h2>Change Email</h2>
                        <label htmlFor="email">New Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </section>
                    
                    <section className="settings-section">
                        <h2>Change Password</h2>
                        <label htmlFor="current-password">Current Password:</label>
                        <input
                            type="password"
                            id="current-password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <label htmlFor="new-password">New Password:</label>
                        <input
                            type="password"
                            id="new-password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            required
                        />
                        <label htmlFor="confirm-password">Confirm New Password:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                        {newPassword !== confirmPassword && confirmPassword.length > 0 && (
                            <p className="error-text">Passwords do not match</p>
                        )}
                    </section>

                    <button type="submit" className="submit-button">Save Changes</button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Settings;