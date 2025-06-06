import React, { useState } from 'react';
import './SignInPage.css';

const SignInPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
        <div className="page-container">
      <h2>Sign In</h2>
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
            <label htmlFor="password">Password</label>
            <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
