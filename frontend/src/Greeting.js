import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export default function Greeting() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function fetchGreeting() {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${API_BASE_URL}/api/greeting`);
      setMessage(res.data.message);
    } catch {
      setError('Error fetching greeting.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Greeting Page</h2>
      <button onClick={fetchGreeting} disabled={loading}>
        {loading ? 'Loading...' : 'Get Greeting from Backend'}
      </button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
