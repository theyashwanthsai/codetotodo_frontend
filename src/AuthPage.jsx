import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [apiKey, setApiKey] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://f6a15c0b-44d5-4e9a-8cb4-64befeb2b252-00-2zk636m79ds6n.pike.replit.dev/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ api_key: apiKey, user_id: userId }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.auth_url) {
            window.open(data.auth_url, '_blank');
        } else {
            localStorage.setItem('isAuthenticated', 'true');
          navigate('/');
        }
      } else {
        console.error('Authentication failed. Status:', response.status);
      }
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div>
      <h1>Authentication</h1>
      <form onSubmit={handleSubmit}>
        <label>
          API Key:
          <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} />
        </label>
        <br />
        <label>
          User ID:
          <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Authenticate</button>
      </form>
    </div>
  );
};

export default AuthPage;