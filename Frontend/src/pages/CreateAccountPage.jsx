import React, { useState } from 'react';
import './CreateAccountPage.css';

const CreateAccountPage = () => {

const [username, setUsername] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="page-container">
      <h2>Create Account</h2>
      <div className="form-box">
        <form>
          <div>
            <label htmlFor="username">Username</label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
            type="text"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)} />
           </div>
           <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccountPage;
