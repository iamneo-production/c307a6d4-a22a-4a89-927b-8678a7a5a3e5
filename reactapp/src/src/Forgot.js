import React, { useState } from 'react';
import './Forgot.css';
const Forgot = () => {
  const [email, setEmail] = useState('');
  const [password, setNew] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to handle the forgot password functionality
    // For example, you can make an API call to send a password reset email
    console.log('Forgot password submitted:', email);
  };

  return (
    <div>
      <h1 className="h1"><center><b>Forgot Password</b></center></h1>
      <div className="col">
      <form onSubmit={handleSubmit}>
        <label>
            <br></br>
            <br></br>
            <br></br>
        Email:
        <br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
            <br></br>
            
          NewPassword:
          <br></br>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setNew(e.target.value)}
          />
        </label>
        <label>
            <br></br>
            
          ConfirmPassword:
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setNew(e.target.value)}
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
      </div>
    </div>
  );
};

export default Forgot;
