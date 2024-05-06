// https://f6a15c0b-44d5-4e9a-8cb4-64befeb2b252-00-2zk636m79ds6n.pike.replit.dev/auth
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [userId, setUserId] = useState('');
  const [todoId, setTodoId] = useState('');
  const [doneId, setDoneId] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://f6a15c0b-44d5-4e9a-8cb4-64befeb2b252-00-2zk636m79ds6n.pike.replit.dev/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          todo_id: todoId,
          done_id: doneId,
          username: username,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.auth_url) {
          window.open(data.auth_url, '_blank');
        } else {
          const expirationTime = Date.now() + 10 * 60 * 1000; // 10 minutes from now
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('expirationTime', expirationTime.toString());
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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', textAlign: 'center'  }}>
  <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
    <h2 style={{ textAlign: 'center' }}>Authentication</h2>
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="userId">User ID:</label>
        <input type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="todoId">Todo ID:</label>
        <input type="text" id="todoId" value={todoId} onChange={(e) => setTodoId(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="doneId">Done ID:</label>
        <input type="text" id="doneId" value={doneId} onChange={(e) => setDoneId(e.target.value)} style={{ width: '100%' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: '100%' }} />
      </div>
      <button type="submit" style={{ width: '100%' }}>Authenticate</button>
    </form>
  </div>
</div> );
};

export default AuthPage;
