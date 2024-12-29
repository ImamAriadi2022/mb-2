import React, { useState } from 'react';

function Login() {
  const [code, setCode] = useState('');

  const handleLogin = () => {
    if (code === '1234') {
      alert('Login successful');
    } else {
      alert('Invalid code');
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <input 
        type="text" 
        placeholder="Verification Code" 
        value={code} 
        onChange={(e) => setCode(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
