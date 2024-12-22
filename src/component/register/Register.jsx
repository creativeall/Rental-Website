import React, { useState } from 'react';
import './Register.css';

const Register = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1>{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                <form className="auth-form">
                    {isSignUp && (
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    {isSignUp && (
                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirm-password"
                                placeholder="Confirm your password"
                                required
                            />
                        </div>
                    )}
                    <button type="submit" className="auth-button">
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>
                <p className="toggle-text">
                    {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <span onClick={toggleForm} className="toggle-link">
                        {isSignUp ? 'Sign In' : 'Sign Up'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
