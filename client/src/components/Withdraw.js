import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Withdraw = ({ userId }) => {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleWithdraw = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/transaction/withdraw', {
        userId,
        amount: withdrawAmount,
      });
      if(response.data.amount<0){
        setMessage("insufficient balance");
      }
      
      setMessage(response.data.msg);
      setError('');
      setWithdrawAmount('');
      setTimeout(() => navigate('/balance'), 2000); // Redirect to balance after 2 seconds
    } catch (err) {
      setError('Withdrawal failed ');
      setMessage('');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Withdraw Money</h2>
      <form onSubmit={handleWithdraw} style={styles.form}>
        <input
          type="number"
          placeholder="Enter amount"
          value={withdrawAmount}
          onChange={(e) => setWithdrawAmount(e.target.value)}
          min="1"
          required
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Withdraw
        </button>
      </form>
      {message && <p style={styles.successMessage}>{message}</p>}
      {error && <p style={styles.errorMessage}>{error}</p>}
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    width: '250px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border 0.3s ease',
  },
  button: {
    padding: '0.8rem',
    width: '250px',
    backgroundColor: '#FF5722',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: '600',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  successMessage: {
    color: 'green',
    fontSize: '1rem',
    marginTop: '1rem',
  },
  errorMessage: {
    color: 'red',
    fontSize: '1rem',
    marginTop: '1rem',
  },
};

export default Withdraw;
