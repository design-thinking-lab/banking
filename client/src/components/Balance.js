import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Balance = ({ userId }) => {
  const [balance, setBalance] = useState(0);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);  // To track loading state

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);  // Start loading
      try {
        const response = await axios.get(`http://localhost:5000/api/transaction/balance/${userId}`);
        setBalance(response.data.balance);  // Set balance from backend
        setLoading(false);  // Stop loading after data is fetched
      } catch (err) {
        setError('Failed to fetch balance');
        setLoading(false);  // Stop loading on error
      }
    };
    fetchBalance();
  }, [userId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Your Balance</h2>
      {loading ? (
        <p style={styles.loading}>Loading...</p>  // Show loading message while fetching data
      ) : error ? (
        <p style={styles.error}>{error}</p>  // Show error message if failed
      ) : (
        <p style={styles.balance}>₹{balance.toFixed(2)}</p>  // Display balance
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9fafb',
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1.5rem',
    color: '#333',
  },
  error: {
    color: 'red',
    fontSize: '1rem',
    marginBottom: '1rem',
  },
  balance: {
    fontSize: '2.5rem',
    fontWeight: '700',
    color: '#4CAF50',
  },
  loading: {
    fontSize: '1.2rem',
    color: '#999',
  },
};

export default Balance;
