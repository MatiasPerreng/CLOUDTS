import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import './Settings.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Settings = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
        <div className="settings d-flex flex-column min-vh-100">
            <Navbar />
            <main className="settings-content container my-4">
                <h1 className="mb-4">Settings</h1>
                <form onSubmit={handleSubmit}>
                    <section className="settings-section mb-4">
                        <h2 className="h5 mb-3">Change Email</h2>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">New Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="form-control"
                                required
                            />
                        </div>
                    </section>
                    
                    <section className="settings-section mb-4">
                        <h2 className="h5 mb-3">Change Password</h2>
                        <div className="mb-3">
                            <label htmlFor="current-password" className="form-label">Current Password:</label>
                            <input
                                type="password"
                                id="current-password"
                                value={password}
                                onChange={handlePasswordChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="new-password" className="form-label">New Password:</label>
                            <input
                                type="password"
                                id="new-password"
                                value={newPassword}
                                onChange={handleNewPasswordChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirm-password" className="form-label">Confirm New Password:</label>
                            <input
                                type="password"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                className="form-control"
                                required
                            />
                            {newPassword !== confirmPassword && confirmPassword.length > 0 && (
                                <p className="error-text text-danger mt-2">Passwords do not match</p>
                            )}
                        </div>
                    </section>

                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
            </main>
            <Footer />
        </div>
    );
};

export default Settings;
