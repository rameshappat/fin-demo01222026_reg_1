import React, { useState } from 'react';
import axios from 'axios';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [mfaMethod, setMfaMethod] = useState('otp');
  const [otp, setOtp] = useState('');
  const [authCode, setAuthCode] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('/api/register', {
        email,
        phoneNumber,
        mfaMethod,
        otp,
        authCode
      });
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" />
      <select value={mfaMethod} onChange={(e) => setMfaMethod(e.target.value)}>
        <option value="otp">OTP</option>
        <option value="authenticator">Authenticator App</option>
      </select>
      {mfaMethod === 'otp' && <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" />}
      {mfaMethod === 'authenticator' && <input type="text" value={authCode} onChange={(e) => setAuthCode(e.target.value)} placeholder="Enter Authenticator Code" />}
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
